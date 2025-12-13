import { Calculator, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useFormState } from "../../context/useFormState";
import BackButton from "../formTwo/PrimaryButton/BackButton";
import { PrimaryButton } from "../formTwo/PrimaryButton/PrimaryButton";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function EstimatedCost() {
  const { formData, updateFormData } = useFormState();
  const [showInput, setShowInput] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [costValue, setCostValue] = useState(
    formData.estimatedProjectCost?.toString() || ""
  );
  const [error, setError] = useState("");

  const handleKnowsCost = () => {
    setShowInput(true);
    setShowDialog(false);
  };

  const handleDoesntKnowCost = () => {
    setShowDialog(true);
  };

  const handleDialogAccept = () => {
    // Set descriptiveNotice to true (300€ prestation)
    updateFormData({
      isEstimatedCostKnown: false,
      descriptiveNotice: true,
      estimatedProjectCost: undefined,
    });
    setShowDialog(false);
  };

  const handleDialogCancel = () => {
    setShowDialog(false);
  };

  const handleCostSubmit = () => {
    const numValue = parseFloat(costValue.replace(/\s/g, "").replace(",", "."));
    if (isNaN(numValue) || numValue <= 0) {
      setError("Veuillez entrer un montant valide");
      return;
    }
    updateFormData({
      isEstimatedCostKnown: true,
      estimatedProjectCost: numValue,
    });
  };

  const formatNumber = (value: string) => {
    // Remove non-numeric characters except comma and dot
    const cleaned = value.replace(/[^\d,.\s]/g, "");
    return cleaned;
  };

  // If cost is already known, show the input with value
  if (formData.isEstimatedCostKnown !== undefined) {
    return null; // Move to next step
  }

  return (
    <div className="px-4 my-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540]">
          Coût prévisionnel
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Connaissez-vous le coût prévisionnel de votre projet ?
        </p>
      </div>

      {!showInput ?
        <>
          {/* Choice Cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8 items-stretch">
            {/* I know the cost */}
            <div
              onClick={handleKnowsCost}
              className="w-full max-w-[400px] mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-200 border border-gray-200 hover:border-[#deb83b] hover:border-opacity-50 hover:scale-[1.01]"
            >
              <div className="bg-[#0a2540] text-white p-6 sm:p-8">
                <Calculator
                  className="w-10 h-10 mb-4 text-gray-300"
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Je connais le coût
                </h2>
                <p className="text-base text-gray-200 italic">
                  J'ai une estimation du budget travaux
                </p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vous avez déjà une idée du coût prévisionnel de vos travaux et
                  pouvez nous le communiquer.
                </p>
              </div>
            </div>

            {/* I don't know the cost */}
            <div
              onClick={handleDoesntKnowCost}
              className="w-full max-w-[400px] mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-200 border border-gray-200 hover:border-[#deb83b] hover:border-opacity-50 hover:scale-[1.01]"
            >
              <div className="bg-[#0a2540] text-white p-6 sm:p-8">
                <HelpCircle
                  className="w-10 h-10 mb-4 text-gray-300"
                  strokeWidth={1.5}
                />
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Je ne connais pas le coût
                </h2>
                <p className="text-base text-gray-200 italic">
                  J'ai besoin d'une estimation
                </p>
              </div>
              <div className="bg-gray-50 p-6 sm:p-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Nos experts réaliseront une estimation du coût de votre projet
                  (prestation supplémentaire de 300€ HT).
                </p>
              </div>
            </div>
          </div>

          {/* Back button only */}
          <div className="flex justify-center items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
            <BackButton
              handleClick={() => {
                updateFormData({
                  isStepZeroChecked: false,
                  flowType: undefined,
                });
              }}
            />
          </div>
        </>
      : <>
          {/* Cost Input Form */}
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="cost"
                className="text-base font-medium text-gray-900"
              >
                Coût prévisionnel des travaux (en €)
              </Label>
              <div className="relative">
                <Input
                  id="cost"
                  type="text"
                  placeholder="Ex: 150 000"
                  value={costValue}
                  onChange={(e) => {
                    setCostValue(formatNumber(e.target.value));
                    setError("");
                  }}
                  className={`h-12 text-lg pr-12 ${error ? "border-red-500" : ""}`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  €
                </span>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <p className="text-sm text-gray-500">
              Indiquez le budget total estimé pour vos travaux, hors honoraires.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
            <BackButton
              handleClick={() => {
                setShowInput(false);
                setCostValue("");
                setError("");
              }}
            />
            <PrimaryButton
              handleClick={handleCostSubmit}
              disabled={!costValue.trim()}
            />
          </div>
        </>
      }

      {/* Dialog for unknown cost */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#0a2540]">
              Estimation du coût
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 pt-2">
              Une prestation{" "}
              <span className="font-semibold">
                « Notice descriptive + estimation prévisionnelle »
              </span>{" "}
              sera appliquée pour{" "}
              <span className="font-bold text-[#0a2540]">300€ HT</span> afin
              d'estimer le coût de votre projet.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
            <p className="text-sm text-amber-800">
              Cette prestation comprend l'élaboration d'un descriptif sommaire
              du projet avec estimation indicative du coût des travaux.
            </p>
          </div>
          <DialogFooter className="flex gap-3 sm:gap-3">
            <Button
              variant="outline"
              onClick={handleDialogCancel}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              onClick={handleDialogAccept}
              className="flex-1 bg-[#0a2540] hover:bg-[#0a2540]/90"
            >
              D'accord
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
