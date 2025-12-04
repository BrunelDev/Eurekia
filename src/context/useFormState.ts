import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface FormData {
  // Step 0 - Flow selection
  isStepZeroChecked: boolean;
  flowType?: "forfait" | "prestations";
  forfaitType?: "AMO" | "MOE";

  // Step 1
  isStepOneChecked: boolean;
  serviceChosen?: "AMO" | "MOE";

  // Step 2
  isStepTwoChecked: boolean;

  // Step 3
  isStepThreeChecked: boolean;
  isArchitectNeeded?: boolean;
  hasMultipleRealizationsOnSameConstructionPermit?: boolean;
  realizationsOnSameConstructionPermitNumber?: number;
  cerfaFilling?: boolean;
  pluVerification?: boolean;
  rdcPlanVerification?: boolean;
  rdcPlanNumber?: number;
  bbioStudy?: boolean;
  seismicStudy?: boolean;
  expressDelivery?: boolean;
  displayPanel?: boolean;
  hasMultipleRealizationsOnSameDeclaration?: boolean;
  realizationsOnSameDeclarationNumber?: number;
  hasMultipleRealizationsOnSameUrbanismCertificate?: boolean;
  realizationsOnSameUrbanismCertificateNumber?: number;
  hasMultipleRealizationsOnSamePlanRequest?: boolean;
  realizationsOnSamePlanRequestNumber?: number;
  doesNeedPlan?: boolean;
  neededPlans?: string[];
  shouldMakeRDCPlan?: boolean;
  rdcPlanCount?: number;
  shouldMake3dRender?: boolean;
  renderCount3d?: number;
  render3D?: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  // Step 4
  isStepFourChecked?: boolean;

  // Client Information
  clientFirstName: string;
  clientLastName: string;
  clientPhone: string;
  clientEmail: string;

  //  Step 5
  isStepFiveChecked: boolean;

  // Final step
  isStepSixChecked: boolean;

  // AMO toggles
  descriptiveNotice?: boolean;
  urbanismAuthorization?: boolean;
  accessibilityNotice?: boolean;
  fireSecurityNotice?: boolean;
  planningStudies?: boolean;
  concessionaryProcedures?: boolean;
  geotechnicalSpecifications?: boolean;
  ccapRedaction?: boolean;
  consultationRegulation?: boolean;

  // MOE toggles
  moeDiagnostic?: boolean;
  moeFeasibility?: boolean;
  moeApsApd?: boolean;
  moeDceAct?: boolean;
  moeExecutionPlans?: boolean;
  moeElectricalCalc?: boolean;
  moePlumbingCalc?: boolean;
  moeHvacCalc?: boolean;
  moeVrdCalc?: boolean;
  moeThermalAttestationSmall?: boolean;
  moeThermalStudyPc?: boolean;
  moeThermalStudyConstruction?: boolean;
  moeFinalAttestationAcv?: boolean;
}

interface FormState {
  formData: FormData;

  // Actions to update form data
  updateFormData: (data: Partial<FormData>) => void;
  updateStepOne: (
    data: Pick<FormData, "address" | "addressDetails" | "isStepOneChecked">
  ) => void;
  updateStepTwo: (data: Pick<FormData, "isStepTwoChecked" | "option">) => void;
  updateStepThree: (
    data: Partial<
      Pick<
        FormData,
        | "isStepThreeChecked"
        | "isArchitectNeeded"
        | "hasMultipleRealizationsOnSameConstructionPermit"
        | "realizationsOnSameConstructionPermitNumber"
        | "pluVerification"
        | "rdcPlanVerification"
        | "rdcPlanNumber"
        | "bbioStudy"
        | "seismicStudy"
        | "expressDelivery"
        | "displayPanel"
        | "hasMultipleRealizationsOnSameDeclaration"
        | "realizationsOnSameDeclarationNumber"
        | "hasMultipleRealizationsOnSameUrbanismCertificate"
        | "realizationsOnSameUrbanismCertificateNumber"
        | "hasMultipleRealizationsOnSamePlanRequest"
        | "realizationsOnSamePlanRequestNumber"
        | "neededPlans"
        | "shouldMakeRDCPlan"
        | "rdcPlanCount"
        | "shouldMake3dRender"
        | "renderCount3d"
        | "render3D"
      >
    >
  ) => void;
  updateStepFour: (data: Pick<FormData, "isStepFourChecked">) => void;
  updateClientInfo: (
    data: Pick<
      FormData,
      "clientFirstName" | "clientLastName" | "clientPhone" | "clientEmail"
    >
  ) => void;
  updateStepFive: (data: Pick<FormData, "isStepFiveChecked">) => void;
  updateFinalStep: (data: Pick<FormData, "isStepSixChecked">) => void;

  // Utility actions
  resetForm: () => void;
  resetStepThree: () => void;
  isStepValid: (step: number) => boolean;
}

const initialFormData: FormData = {
  // Step 0
  isStepZeroChecked: false,
  flowType: undefined,
  forfaitType: undefined,

  // Step 1
  isStepOneChecked: false,
  serviceChosen: undefined,

  // Step 2
  isStepTwoChecked: false,

  // Step 3
  isStepThreeChecked: false,

  // Step 4
  isStepFourChecked: undefined,

  // Client Information
  clientFirstName: "",
  clientLastName: "",
  clientPhone: "",
  clientEmail: "",

  // Step 5
  isStepFiveChecked: false,
  // Final step
  isStepSixChecked: false,

  // AMO toggles (default false)
  descriptiveNotice: false,
  urbanismAuthorization: false,
  accessibilityNotice: false,
  fireSecurityNotice: false,
  planningStudies: false,
  concessionaryProcedures: false,
  geotechnicalSpecifications: false,
  ccapRedaction: false,
  consultationRegulation: false,

  // MOE toggles (default false)
  moeDiagnostic: false,
  moeFeasibility: false,
  moeApsApd: false,
  moeDceAct: false,
  moeExecutionPlans: false,
  moeElectricalCalc: false,
  moePlumbingCalc: false,
  moeHvacCalc: false,
  moeVrdCalc: false,
  moeThermalAttestationSmall: false,
  moeThermalStudyPc: false,
  moeThermalStudyConstruction: false,
  moeFinalAttestationAcv: false,
};

export const useFormState = create<FormState>()(
  persist(
    (set, get) => ({
      formData: initialFormData,

      updateFormData: (data) => {
        set((state) => {
          const newState = { ...state.formData, ...data };

          return { formData: newState };
        });
      },

      updateStepOne: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      updateStepTwo: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      updateStepThree: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      updateStepFour: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      updateClientInfo: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      updateStepFive: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      updateFinalStep: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),

      resetForm: () =>
        set(() => ({
          formData: initialFormData,
        })),

      resetStepThree: () =>
        set((state) => ({
          formData: {
            ...state.formData,
            // Reset step 3 form fields
            isArchitectNeeded: false,
            hasMultipleRealizationsOnSameConstructionPermit: undefined,
            realizationsOnSameConstructionPermitNumber: undefined,
            cerfaFilling: false,
            pluVerification: undefined,
            rdcPlanVerification: undefined,
            rdcPlanNumber: undefined,
            bbioStudy: undefined,
            seismicStudy: undefined,
            expressDelivery: undefined,
            displayPanel: undefined,
            hasMultipleRealizationsOnSameDeclaration: undefined,
            realizationsOnSameDeclarationNumber: undefined,
            hasMultipleRealizationsOnSameUrbanismCertificate: undefined,
            realizationsOnSameUrbanismCertificateNumber: undefined,
            hasMultipleRealizationsOnSamePlanRequest: undefined,
            realizationsOnSamePlanRequestNumber: undefined,
            doesNeedPlan: undefined,
            neededPlans: [],
            shouldMakeRDCPlan: undefined,
            rdcPlanCount: undefined,
            shouldMake3dRender: undefined,
            renderCount3d: undefined,
            render3D: undefined,
            // Reset AMO toggles
            descriptiveNotice: false,
            urbanismAuthorization: false,
            accessibilityNotice: false,
            fireSecurityNotice: false,
            planningStudies: false,
            concessionaryProcedures: false,
            geotechnicalSpecifications: false,
            ccapRedaction: false,
            consultationRegulation: false,
            // Reset MOE toggles
            moeDiagnostic: false,
            moeFeasibility: false,
            moeApsApd: false,
            moeDceAct: false,
            moeExecutionPlans: false,
            moeElectricalCalc: false,
            moePlumbingCalc: false,
            moeHvacCalc: false,
            moeVrdCalc: false,
            moeThermalAttestationSmall: false,
            moeThermalStudyPc: false,
            moeThermalStudyConstruction: false,
            moeFinalAttestationAcv: false,
          },
        })),

      isStepValid: (step: number) => {
        const { formData } = get();

        switch (step) {
          case 1:
            return formData.address.trim() !== "" && formData.isStepOneChecked;
          case 2:
            return formData.option.trim() !== "" && formData.isStepTwoChecked;
          case 3:
            return formData.isStepThreeChecked;
          case 4:
            return (
              formData.clientFirstName.trim() !== "" &&
              formData.clientLastName.trim() !== "" &&
              formData.clientPhone.trim() !== "" &&
              formData.clientEmail.trim() !== ""
            );
          case 5:
            return formData.isStepFiveChecked;
          case 6:
            return formData.isStepSixChecked;
          default:
            return false;
        }
      },
    }),
    {
      name: "multipart-form-storage",
      storage: createJSONStorage(() => localStorage),
      // Optional: only persist certain fields
      partialize: (state) => ({ formData: state.formData }),
    }
  )
);
