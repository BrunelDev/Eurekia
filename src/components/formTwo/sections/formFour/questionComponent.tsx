/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../ui/card";
import { Checkbox } from "../../../ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../ui/dialog";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

export function Question({
  question,
  description,
  handleChange,
  value,
  required = false,
  error,
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  value?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)] flex items-center">
            {question}{" "}
            {required && <span className="text-red-500 ml-1">*</span>}
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            {description}
          </div>
        </div>

        <RadioGroup
          value={value}
          onValueChange={(value: string) => {
            handleChange(value === "oui" ? true : false);
          }}
          className="inline-flex items-center gap-6 sm:gap-8 relative flex-[0_0_auto]"
        >
          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem
              value="oui"
              id={question}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <Label
              htmlFor={question}
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-sm sm:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Oui
            </Label>
          </div>

          <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
            <RadioGroupItem
              value="non"
              id="non"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <Label
              htmlFor="non"
              className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#021327] text-sm sm:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)] cursor-pointer"
            >
              Non
            </Label>
          </div>
        </RadioGroup>

        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
      </CardContent>
    </Card>
  );
}

export function QuestionWithInput({
  question,
  description,
  handleChange,
  handleInputChange,
  inputValue,
  value,
  placeholder,
  price,
  type,
  options,
  inputRequired = false,
  error,
  inputError,
  alert,
}: {
  question: string;
  description?: string;
  handleChange: (value: boolean) => void;
  handleInputChange: (value: string | undefined) => void;
  inputValue?: string;
  value?: boolean;
  placeholder?: string;
  price?: string;
  type?: string;
  options?: { label: string; value: string }[];
  inputRequired?: boolean;
  error?: string;
  inputError?: string;
  alert?: string[];
  index?: number;
  formData?: any;
}) {
  const [checked, setChecked] = useState(value || false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    inputValue || undefined
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertChecks, setAlertChecks] = useState<boolean[]>([]);

  // Fonction utilitaire pour mettre à jour le résumé de manière cohérente
  const updateSummary = (
    _questionText: string,
    _inputValue?: string,
    _isChecked?: boolean
  ) => {};
  const [selectedBoxes, setSelectedBoxes] = useState<string[]>([]);

  // Initialiser/réinitialiser l'état des cases d'alerte à l'ouverture du dialogue ou quand la liste change
  // Toutes décochées par défaut
  useEffect(() => {
    if (isDialogOpen && alert) {
      setAlertChecks(new Array(alert.length).fill(false));
    }
  }, [isDialogOpen, alert]);

  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-start gap-3 p-4 sm:p-5">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            {alert ?
              <>
                <Checkbox
                  id={question}
                  checked={checked}
                  onCheckedChange={() => {
                    if (!checked) {
                      // User is checking the box - show dialog
                      setIsDialogOpen(true);
                    } else {
                      // User is unchecking - no dialog, just uncheck directly
                      setChecked(false);
                      handleChange(false);
                      handleInputChange(undefined);
                      setSelectedOption("");
                    }
                  }}
                  className={`w-5 h-5 sm:w-6 sm:h-6 mt-0.5 ${
                    checked ? "bg-yellow-500" : ""
                  }`}
                />
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Conditions requises</DialogTitle>
                      <DialogDescription className="text-sm text-gray-600 mb-2">
                        Veuillez prendre connaissance des conditions suivantes.
                        Ces informations sont fournies à titre indicatif.
                      </DialogDescription>
                      <div className="flex flex-col gap-2">
                        {alert?.map((item, idx) => (
                          <label
                            key={`alert-${idx}`}
                            className="flex items-start gap-2"
                          >
                            <Checkbox
                              id={`alert-${idx}`}
                              checked={Boolean(alertChecks[idx])}
                              onCheckedChange={(val) => {
                                const next = [...alertChecks];
                                next[idx] = Boolean(val);
                                setAlertChecks(next);
                              }}
                              className="w-4 h-4 mt-0.5"
                            />
                            <DialogDescription className="text-sm text-gray-700">
                              {item}
                            </DialogDescription>
                          </label>
                        ))}
                      </div>
                    </DialogHeader>
                    <DialogFooter className="flex justify-end gap-2">
                      <DialogClose asChild>
                        <button
                          className="px-4 py-2 bg-gray-200 rounded-lg"
                          onClick={() => {
                            setChecked(false);
                            handleChange(false);
                            setAlertChecks(
                              alert ? new Array(alert.length).fill(false) : []
                            );
                            if (!checked) {
                              handleInputChange(undefined);
                              setSelectedOption("");
                            }
                          }}
                        >
                          Annuler
                        </button>
                      </DialogClose>
                      <DialogClose asChild>
                        <button
                          className="px-4 py-2 rounded-lg bg-info-500 text-white hover:bg-info-600 transition-colors"
                          onClick={() => {
                            setChecked(true);
                            handleChange(true);
                            // Réinitialiser les cases d'alerte après confirmation
                            setAlertChecks(
                              alert ? new Array(alert.length).fill(false) : []
                            );
                          }}
                        >
                          Continuer
                        </button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </>
            : <Checkbox
                id={question}
                checked={checked}
                onCheckedChange={() => {
                  const newChecked = !checked;
                  setChecked(newChecked);
                  handleChange(newChecked);
                  if (!newChecked) {
                    handleInputChange(undefined);
                    setSelectedOption("");
                  }
                }}
                className={`w-5 h-5 sm:w-6 sm:h-6 mt-0.5 ${
                  checked ? "bg-syracuse_red_orange" : ""
                }`}
              />
            }

            <div className="flex items-center gap-[4px_8px] ">
              <Label
                htmlFor={question}
                className="relative self-stretch w-fit mt-[-1.00px] font-text-bold-medium font-[number:var(--text-bold-medium-font-weight)] text-picto-color text-sm sm:text-[length:var(--text-bold-medium-font-size)] tracking-[var(--text-bold-medium-letter-spacing)] leading-[var(--text-bold-medium-line-height)] [font-style:var(--text-bold-medium-font-style)] cursor-pointer text-wrap flex items-center"
              >
                <h6 className="">
                  <span>{question}</span>

                  {price && (
                    <span className="w-fit font-text-small font-[number:var(--text-small-font-weight)] text-yellow-500 text-xs sm:text-[length:var(--text-small-font-size)] tracking-[var(--text-small-letter-spacing)] leading-[var(--text-small-line-height)] whitespace-nowrap [font-style:var(--text-small-font-style)] ml-1">
                      {price}
                    </span>
                  )}
                </h6>
              </Label>
            </div>
          </div>

          <div className="relative self-stretch font-text-medium font-[number:var(--text-medium-font-weight)] text-text-color text-sm sm:text-[length:var(--text-medium-font-size)] tracking-[var(--text-medium-letter-spacing)] leading-[var(--text-medium-line-height)] [font-style:var(--text-medium-font-style)]">
            <h6 className="text-wrap">{description}</h6>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        {placeholder && type !== "option" && checked && (
          <div className="w-full">
            <Input
              value={inputValue}
              placeholder={placeholder}
              className={`w-full border ${
                inputError ? "border-red-500" : "border-gray-300"
              } p-2 rounded-lg`}
              required={inputRequired && checked}
              onChange={(e) => {
                const inputValue = e.target.value;
                handleInputChange(inputValue);

                // Mise à jour du résumé avec la nouvelle fonction
                updateSummary(question, inputValue);
              }}
            />
            {inputError && (
              <div className="text-red-500 text-sm mt-1">{inputError}</div>
            )}
          </div>
        )}

        {type === "option" && checked && (
          <div className="w-full">
            <Select
              required={inputRequired && checked}
              value={selectedOption}
              onValueChange={(value) => {
                console.log(
                  "Selected option:---------------------------------",
                  value
                );
                setSelectedOption(value);
                handleInputChange(value);
                // Mise à jour du résumé avec la nouvelle fonction
                updateSummary(question, value);
              }}
            >
              <SelectTrigger
                className={`w-full ${inputError ? "border-red-500" : ""}`}
              >
                <SelectValue placeholder={placeholder || "Sélectionnez"} />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {inputError && (
              <div className="text-red-500 text-sm mt-1">{inputError}</div>
            )}
          </div>
        )}

        {type === "checkbox" && checked && (
          <div className="pl-3 w-full">
            <div className="sm:grid grid-cols-2 sm:gap-2 flex flex-col gap-3">
              {options?.map((option, optionIndex) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${question}-${optionIndex}`}
                    value={option.value}
                    checked={selectedBoxes.includes(option.value)}
                    onCheckedChange={(isChecked) => {
                      if (isChecked) {
                        handleInputChange(
                          JSON.stringify([...selectedBoxes, option.value])
                        );
                        setSelectedBoxes([...selectedBoxes, option.value]);
                      } else {
                        setSelectedBoxes(
                          selectedBoxes.filter((item) => item !== option.value)
                        );
                        handleInputChange(JSON.stringify(selectedBoxes));
                      }
                    }}
                    className="w-4 h-4"
                  />
                  <Label
                    htmlFor={`${question}-${optionIndex}`}
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
            {inputError && (
              <div className="text-red-500 text-sm mt-1">{inputError}</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
