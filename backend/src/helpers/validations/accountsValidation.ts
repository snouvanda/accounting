import {
  AccountCategory,
  AccountClassification,
  AccountNormalBalance,
  DepreciableAsset,
} from "@/enums/dbEnums";
import { AccountData } from "@/types/customTypes";
import { merge } from "lodash";

export const isAccountInputsValid = (inputs: AccountData) => {
  let inputsValidation = { validation: false };
  let invalids: string[] = [];
  let validationState: boolean = true;

  // Validating: code

  // Validating: alias

  // Validating: description

  // Validating: classification
  const validClassification = () => {
    if (inputs.classification in AccountClassification) return true;
  };
  if (!validClassification) {
    invalids.push("classification");
    validationState = false;
  }

  // Validating: category
  const validCategory = () => {
    if (inputs.category in AccountCategory) return true;
  };
  if (!validCategory) {
    invalids.push("category");
    validationState = false;
  }

  // Validating: normalBalance
  const validNormalBalance = () => {
    if (inputs.normalBalance in AccountNormalBalance) return true;
  };
  if (!validNormalBalance) {
    invalids.push("normalBalance");
    validationState = false;
  }

  // Validating: isDeprcAsset
  const validIsDeprcAsset = () => {
    if (inputs.isDeprcAsset in DepreciableAsset) return true;
  };
  if (!validIsDeprcAsset) {
    invalids.push("isDeprcAsset");
    validationState = false;
  }

  // Validating: remarks

  // Validating: createdBy

  // Return validation process
  if (validationState) {
    inputsValidation.validation = true;
  } else inputsValidation.validation = false;

  let finalValidation = merge(inputsValidation, { invalids: invalids });
  return finalValidation;
};