import React from "react";
import { useFormState } from "../../context/useFormState";

export const UserInfoSection = () => {
  const { formData, updateFormData } = useFormState();

  const steps = [
    {
      icon: "/icons/localisation.svg",
      inactiveIcon: "/icons/localisation-inactive.svg",
      label: "Choix formule",
      isCompleted: formData.isStepZeroChecked,
      labelPosition: "-left-4",
      isCurrent: !formData.isStepZeroChecked,
    },
    {
      icon: "/icons/estimation.svg",
      inactiveIcon: "/icons/estimation-inactive.svg",
      label: "Type",
      isCompleted: formData.isStepZeroChecked && formData.isStepOneChecked,
      labelPosition: "left-[-13px]",
      isCurrent: formData.isStepZeroChecked && !formData.isStepOneChecked,
    },
    {
      icon: "/icons/projets.svg",
      inactiveIcon: "/icons/projets-inactive.svg",
      label: "Prestations",
      isCompleted:
        formData.isStepZeroChecked &&
        formData.isStepOneChecked &&
        formData.isStepTwoChecked,
      labelPosition: "left-0",
      isCurrent:
        formData.isStepZeroChecked &&
        formData.isStepOneChecked &&
        !formData.isStepTwoChecked,
    },
    {
      icon: "/icons/details.svg",
      inactiveIcon: "/icons/details-inactive.svg",
      label: "Coordonnées",
      isCompleted:
        formData.isStepZeroChecked &&
        formData.isStepOneChecked &&
        formData.isStepTwoChecked &&
        formData.isStepThreeChecked,
      labelPosition: "-left-0.5",
      isCurrent:
        formData.isStepZeroChecked &&
        formData.isStepOneChecked &&
        formData.isStepTwoChecked &&
        !formData.isStepThreeChecked,
    },
    // {
    //   icon: "/icons/coordonnees.svg",
    //   inactiveIcon: "/icons/coordonnees-inactive.svg",
    //   label: "Coordonnées",
    //   isCompleted:
    //     formData.isStepOneChecked &&
    //     formData.isStepTwoChecked &&
    //     formData.isStepThreeChecked &&
    //     formData.isStepFourChecked &&
    //     formData.isStepFiveChecked,
    //   labelPosition: "-left-5",
    //   isCurrent:
    //     formData.isStepOneChecked &&
    //     formData.isStepTwoChecked &&
    //     formData.isStepThreeChecked &&
    //     formData.isStepFourChecked &&
    //     !formData.isStepFiveChecked,
    // },
    // {
    //   icon: "/icons/finalisation.svg",
    //   inactiveIcon: "/icons/finalisation-inactive.svg",
    //   label: "Finalisation",
    //   isCompleted:
    //     formData.isStepOneChecked &&
    //     formData.isStepTwoChecked &&
    //     formData.isStepThreeChecked &&
    //     formData.isStepFourChecked &&
    //     formData.isStepFiveChecked &&
    //     formData.isStepSixChecked,
    //   labelPosition: "-left-3.5",
    //   isCurrent:
    //     formData.isStepOneChecked &&
    //     formData.isStepTwoChecked &&
    //     formData.isStepThreeChecked &&
    //     formData.isStepFourChecked &&
    //     formData.isStepFiveChecked &&
    //     !formData.isStepSixChecked,
    // },
  ];
  const handleNavigation = (stepIndex: number) => {
    // Step 0: Choix formule (FormZero)
    if (stepIndex === 0 && formData.isStepZeroChecked) {
      updateFormData({
        ...formData,
        isStepZeroChecked: false,
        isStepOneChecked: false,
        isStepTwoChecked: false,
        isStepThreeChecked: false,
        isStepFourChecked: false,
      });
      return;
    }
    // Step 1: Type (FormOne - AMO/MOE selection)
    if (stepIndex === 1 && formData.isStepOneChecked) {
      updateFormData({
        ...formData,
        // Reset forfait flow fields
        projectType: undefined,
        estimatedProjectCost: undefined,
        isEstimatedCostKnown: undefined,

        isStepOneChecked: false,
        isStepTwoChecked: false,
        isStepThreeChecked: false,
        isStepFourChecked: false,
      });
      return;
    }
    // Step 2: Prestations (FormTwo - selection or recap)
    if (stepIndex === 2 && formData.isStepTwoChecked) {
      updateFormData({
        ...formData,
        isStepTwoChecked: false,
        isStepThreeChecked: false,
        isStepFourChecked: false,
      });
      return;
    }
    // Step 3: Coordonnées (FormThree - client info)
    if (stepIndex === 3 && formData.isStepThreeChecked) {
      updateFormData({
        ...formData,
        isStepThreeChecked: false,
        isStepFourChecked: false,
      });
      return;
    }
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 w-full translate-y-[-1rem] animate-fade-in opacity-1 px-4 sm:px-0">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className="flex flex-col w-6 h-6 sm:w-8 sm:h-8 items-center justify-center gap-2.5 relative cursor-pointer flex-shrink-0"
            onClick={() => handleNavigation(index)}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                step.isCompleted || step.isCurrent ?
                  "bg-yellow-400"
                : "bg-[#f7f7f8] border border-solid border-[#b8b9c1]"
              }`}
            >
              <img
                className="w-[12px] h-[12px] sm:w-5 sm:h-5"
                alt="Icon step"
                src={
                  step.isCurrent || step.isCompleted ?
                    step.icon
                  : step.inactiveIcon
                }
              />
            </div>

            <div
              className={`absolute top-[28px] sm:top-[35px] left-1/2 transform -translate-x-1/2 ${
                step.isCurrent ?
                  "font-[number:var(--label-smaller-font-weight)] font-label-smaller text-[#021327] text-xs sm:text-[length:var(--label-smaller-font-size)] text-center tracking-[var(--label-smaller-letter-spacing)] leading-[var(--label-smaller-line-height)] [font-style:var(--label-smaller-font-style)]"
                : step.isCompleted ?
                  "opacity-80 font-[number:var(--text-smaller-font-weight)] font-text-smaller text-[#021327] text-xs sm:text-[length:var(--text-smaller-font-size)] text-center tracking-[var(--text-smaller-letter-spacing)] leading-[var(--text-smaller-line-height)] [font-style:var(--text-smaller-font-style)]"
                : "opacity-60 font-[number:var(--text-smaller-font-weight)] font-text-smaller text-[#021327] text-xs sm:text-[length:var(--text-smaller-font-size)] text-center tracking-[var(--text-smaller-letter-spacing)] leading-[var(--text-smaller-line-height)] [font-style:var(--text-smaller-font-style)]"
              } whitespace-nowrap hidden md:block`}
            >
              {step.label}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`w-4 sm:w-8 h-[1px] border ${
                step.isCompleted ? "border-yellow-500" : "border-gray-300"
              } object-cover flex-shrink-0`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
