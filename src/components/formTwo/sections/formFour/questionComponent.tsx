/* eslint-disable @typescript-eslint/no-explicit-any */
import { Upload } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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
  // formData,
  // updateFormData,
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
  alert?: { doc: string; price: number }[];
  index?: number;
  formData?: any;
  updateFormData?: (data: any) => void;
}) {
  const [checked, setChecked] = useState(value || false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    inputValue || undefined
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Track uploaded files for each alert item (null = not uploaded)
  const [uploadedFiles, setUploadedFiles] = useState<(File | null)[]>([]);

  // Fonction utilitaire pour mettre à jour le résumé de manière cohérente
  const updateSummary = (
    _questionText: string,
    _inputValue?: string,
    _isChecked?: boolean
  ) => {};
  const [selectedBoxes, setSelectedBoxes] = useState<string[]>([]);

  // Initialize uploaded files state when dialog opens
  useEffect(() => {
    if (isDialogOpen && alert) {
      setUploadedFiles(new Array(alert.length).fill(null));
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
                  <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Documents requis</DialogTitle>
                      <DialogDescription className="text-sm text-gray-600 mb-2">
                        Veuillez télécharger les documents suivants. Si vous ne
                        disposez pas d'un document, un coût supplémentaire de
                        50€ sera appliqué pour sa conception.
                      </DialogDescription>
                      <div className="flex flex-col gap-4 mt-4">
                        {alert?.map((item, idx) => (
                          <div
                            key={`alert-${idx}`}
                            className="flex flex-col gap-2 p-3 border border-gray-200 rounded-lg"
                          >
                            <label className="text-sm font-medium text-gray-700">
                              {typeof item === "string" ? item : item.doc}
                            </label>
                            <div className="flex items-center gap-2">
                              <label
                                htmlFor={`file-${question}-${idx}`}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${
                                  uploadedFiles[idx] ?
                                    "border-green-500 bg-green-50 text-green-700"
                                  : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                                }`}
                              >
                                <Upload className="w-4 h-4" />
                                <span className="text-sm">
                                  {uploadedFiles[idx] ?
                                    uploadedFiles[idx]!.name.slice(0, 20) +
                                    (uploadedFiles[idx]!.name.length > 20 ?
                                      "..."
                                    : "")
                                  : "Choisir un fichier"}
                                </span>
                              </label>
                              <input
                                id={`file-${question}-${idx}`}
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={(e) => {
                                  const file = e.target.files?.[0] || null;
                                  const next = [...uploadedFiles];
                                  next[idx] = file;
                                  setUploadedFiles(next);
                                }}
                              />
                              {uploadedFiles[idx] && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const next = [...uploadedFiles];
                                    next[idx] = null;
                                    setUploadedFiles(next);
                                  }}
                                  className="text-red-500 hover:text-red-700 text-sm"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                            {!uploadedFiles[idx] && (
                              <p className="text-xs text-amber-600">
                                +{typeof item === "string" ? 50 : item.price}€
                                si non fourni
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </DialogHeader>
                    <DialogFooter className="flex justify-end gap-2 mt-4">
                      <DialogClose asChild>
                        <button
                          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                          onClick={() => {
                            setChecked(false);
                            handleChange(false);
                            setUploadedFiles(
                              alert ? new Array(alert.length).fill(null) : []
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
                            // Find missing documents with their prices
                            const missingDocs: {
                              name: string;
                              price: number;
                            }[] = [];
                            alert?.forEach((item, idx) => {
                              if (!uploadedFiles[idx]) {
                                if (typeof item === "string") {
                                  missingDocs.push({ name: item, price: 50 });
                                } else {
                                  missingDocs.push({
                                    name: item.doc,
                                    price: item.price,
                                  });
                                }
                              }
                            });

                            // Show toast if there are missing documents
                            if (missingDocs.length > 0) {
                              const totalCost = missingDocs.reduce(
                                (sum, doc) => sum + doc.price,
                                0
                              );
                              toast.warning(
                                `Coût supplémentaire de ${totalCost}€ pour ${missingDocs.length} document${missingDocs.length > 1 ? "s" : ""} manquant${missingDocs.length > 1 ? "s" : ""}`,
                                {
                                  description:
                                    "Ce montant sera ajouté à votre devis.",
                                  duration: 5000,
                                }
                              );
                            }

                            // Save uploaded files to form state (convert to base64)
                            const filePromises = uploadedFiles
                              .filter((file): file is File => file !== null)
                              .map((file) => {
                                return new Promise<{
                                  name: string;
                                  base64: string;
                                  type: string;
                                }>((resolve) => {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    const base64 = (
                                      reader.result as string
                                    ).split(",")[1]; // Remove data:... prefix
                                    resolve({
                                      name: file.name,
                                      base64,
                                      type: file.type,
                                    });
                                  };
                                  reader.readAsDataURL(file);
                                });
                              });

                            // First, set the prestation as checked
                            setChecked(true);
                            handleChange(true);

                            // Update form state with both missing documents and uploaded files
                            // Note: We wait a tick to ensure the prestation toggle has been applied
                            Promise.all(filePromises).then((newFiles) => {
                              // Use setTimeout to ensure we get the latest formData after handleChange
                              setTimeout(() => {
                                // Get fresh state from Zustand store
                                const {
                                  useFormState,
                                } = require("../../../../context/useFormState");
                                const {
                                  formData: freshData,
                                  updateFormData: freshUpdate,
                                } = useFormState.getState();

                                if (freshUpdate && freshData) {
                                  const existingFiles =
                                    freshData.uploadedFiles || [];
                                  const existingMissing: {
                                    name: string;
                                    price: number;
                                  }[] = freshData.missingDocuments || [];

                                  // Add new missing docs (avoiding duplicates by name)
                                  const existingNames = new Set(
                                    existingMissing.map((d: any) => d.name)
                                  );
                                  const newMissingDocs = missingDocs.filter(
                                    (d) => !existingNames.has(d.name)
                                  );

                                  freshUpdate({
                                    missingDocuments: [
                                      ...existingMissing,
                                      ...newMissingDocs,
                                    ],
                                    uploadedFiles:
                                      newFiles.length > 0 ?
                                        [...existingFiles, ...newFiles]
                                      : existingFiles,
                                  });
                                }
                              }, 50);
                            });

                            // Reset uploaded files after confirmation
                            setUploadedFiles(
                              alert ? new Array(alert.length).fill(null) : []
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
