"use client";
import { FooterSection } from "../../components/FooterSection";
import FormFour from "../../components/formFour/formFour";
import FormOne from "../../components/formOne/formOne";
import FormThree from "../../components/formThree/formThree";
import { default as FormTwo } from "../../components/formTwo/formTwo";
import FormZero from "../../components/formZero/formZero";
import { NavigationSection } from "../../components/NavigationSection";
import { UserInfoSection } from "../../components/userInfoSection/userInfoSection";
import { useFormState } from "../../context/useFormState";

export function Formulaire() {
  const { formData } = useFormState();
  const {
    isStepZeroChecked,
    isStepOneChecked,
    isStepTwoChecked,
    isStepThreeChecked,
    isStepFourChecked,
  } = formData;
  return (
    <div className="relative bg-[#f7f7f8] ">
      <NavigationSection />
      <div className="mt-[20px] h-fit">
        <div className="translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms] mb-[50px]">
          <UserInfoSection />
        </div>
        {isStepFourChecked ?
          <FormFour />
        : isStepThreeChecked ?
          <FormFour />
        : isStepTwoChecked ?
          <FormThree />
        : isStepOneChecked ?
          <FormTwo />
        : isStepZeroChecked ?
          <FormOne />
        : <FormZero />}
      </div>
      <FooterSection />
    </div>
  );
}
