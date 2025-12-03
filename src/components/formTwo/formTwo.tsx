import { DraftingCompass, HardHat } from "lucide-react";
import { useEffect } from "react";
import { useFormState } from "../../context/useFormState";
import { ForfaitRecap } from "../ForfaitRecap/ForfaitRecap";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import BackButton from "./PrimaryButton/BackButton";
import { PrimaryButton } from "./PrimaryButton/PrimaryButton";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection/ClientFeedbackSection";
import { InformationSummarySection } from "./sections/InformationSummarySection/InformationSummarySection";

export default function FormTwo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { formData, updateFormData } = useFormState();

  // Check if this is a forfait flow
  const isForfaitFlow = formData.flowType === "forfait";

  const selectedAmo = [
    formData.descriptiveNotice ? "Notice descriptive + estimation" : null,
    formData.urbanismAuthorization ? "Autorisation urbanisme" : null,
    formData.accessibilityNotice ? "Notice accessibilité" : null,
    formData.fireSecurityNotice ? "Notice sécurité incendie" : null,
    formData.planningStudies ? "Planning (études & travaux)" : null,
    formData.concessionaryProcedures ? "Démarches concessionnaires" : null,
    formData.geotechnicalSpecifications ? "CCTP géotechnique" : null,
    formData.ccapRedaction ? "Rédaction CCAP" : null,
    formData.consultationRegulation ? "Règlement de consultation" : null,
  ].filter(Boolean) as string[];

  const selectedMoe = [
    formData.moeDiagnostic ? "Diagnostic (construction existante)" : null,
    formData.moeFeasibility ? "Étude de faisabilité" : null,
    formData.moeApsApd ? "Études de conception (APS/APD)" : null,
    formData.moeDceAct ? "DCE & ACT" : null,
    formData.moeExecutionPlans ? "Plans d'exécution technique" : null,
    formData.moeElectricalCalc ? "Note de calcul électrique" : null,
    formData.moePlumbingCalc ? "Note de calcul plomberie" : null,
    formData.moeHvacCalc ? "Note de calcul aéraulique (HVAC)" : null,
    formData.moeVrdCalc ? "Note de calcul VRD" : null,
    formData.moeThermalAttestationSmall ?
      "Attestation thermique (<50 m²)"
    : null,
    formData.moeThermalStudyPc ? "Étude thermique (PC >50 m²)" : null,
    formData.moeThermalStudyConstruction ?
      "Étude thermique (phase chantier)"
    : null,
    formData.moeFinalAttestationAcv ? "Attestation + ACV fin de travaux" : null,
  ].filter(Boolean) as string[];

  return (
    <div className="w-full  relative">
      <div className="bg-[#f7f7f8]">
        <div className="flex sm:flex-col flex-col-reverse lg:flex-row gap-4 lg:gap-6 pr-3">
          <div className="w-full lg:w-[28%] animate-fade-in opacity-100 [--animation-delay:600ms] pb-[150px] sm:pb-0">
            <ClientFeedbackSection />
          </div>
          <ScrollArea
            className="w-full lg:w-[42%] sm:h-[62vh] h-auto lg:h-[calc(100vh-172px)] px-2 sm:px-4 lg:px-5"
            scrollHideDelay={100}
          >
            <div className="w-full z-50 h-full">
              {
                isForfaitFlow && formData.serviceChosen ?
                  // Show Forfait Recap for forfait flow
                  <div className="space-y-6">
                    <ForfaitRecap forfaitType={formData.serviceChosen} />
                    <div className="hidden sm:flex flex-row items-center justify-between gap-4">
                      <BackButton
                        handleClick={() => {
                          updateFormData({
                            ...formData,
                            isStepOneChecked: false,
                          });
                        }}
                      />
                      <PrimaryButton
                        handleClick={() => {
                          updateFormData({
                            ...formData,
                            isStepTwoChecked: true,
                          });
                        }}
                      />
                    </div>
                  </div>
                  // Show InformationSummarySection for prestations flow
                : <InformationSummarySection />
              }
            </div>
          </ScrollArea>
          {/*here we add the resume of choosen services card*/}
          <div className="w-full lg:w-[28%] px-2 sm:px-0 py-3">
            <Card className="h-auto border border-gray-200 bg-white shadow-sm">
              <CardHeader className="p-3 pb-2">
                <CardTitle className="text-base text-black">
                  Aperçu du service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-2 max-h-72 sm:max-h-80 lg:max-h-[calc(100vh-240px)] overflow-y-auto">
                {formData.serviceChosen ?
                  <div className="flex items-start gap-3">
                    {formData.serviceChosen === "AMO" ?
                      <DraftingCompass className="mt-0.5 w-5 h-5 text-black" />
                    : <HardHat className="mt-0.5 w-5 h-5 text-black" />}
                    <div>
                      <div className="text-base font-medium text-black">
                        {formData.serviceChosen === "AMO" ?
                          "Assistance à Maîtrise d'Ouvrage"
                        : "Maîtrise d'Œuvre"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {formData.serviceChosen === "AMO" ?
                          "Je pilote mon projet"
                        : "Je conçois techniquement mon projet"}
                      </div>
                      {/* Show flow type */}
                      <div className="mt-2 text-xs text-[#deb83b] font-medium">
                        {isForfaitFlow ?
                          "✓ Forfait complet"
                        : "Prestations à la carte"}
                      </div>
                      <div className="mt-3">
                        {(() => {
                          // For forfait flow, show that all prestations are included
                          if (isForfaitFlow) {
                            const count =
                              formData.serviceChosen === "AMO" ? 9 : 13;
                            return (
                              <div>
                                <div className="text-sm text-gray-500 mb-1">
                                  Forfait complet ({count} prestations)
                                </div>
                                <p className="text-xs text-gray-600">
                                  Toutes les prestations{" "}
                                  {formData.serviceChosen} sont incluses
                                </p>
                              </div>
                            );
                          }

                          // For prestations flow, show selected items
                          const items =
                            formData.serviceChosen === "AMO" ?
                              selectedAmo
                            : selectedMoe;
                          if (items.length === 0) return null;
                          return (
                            <div>
                              <div className="text-sm text-gray-500 mb-1">
                                Prestations sélectionnées ({items.length})
                              </div>
                              <ul className="space-y-1 list-disc pl-4 text-sm text-black">
                                {items.map((label) => (
                                  <li key={label}>{label}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                : <div className="text-sm text-gray-500">
                    Aucun service sélectionné pour l'instant
                  </div>
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile buttons for forfait flow */}
      {isForfaitFlow && formData.serviceChosen && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 flex items-center justify-between animate-fade-in opacity-1 [--animation-delay:400ms] bg-[#ffffffaa] pt-10 pb-14 px-4 shadow-xl backdrop-blur-lg">
          <BackButton
            handleClick={() => {
              updateFormData({
                ...formData,
                isStepOneChecked: false,
              });
            }}
          />
          <PrimaryButton
            handleClick={() => {
              updateFormData({
                ...formData,
                isStepTwoChecked: true,
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
