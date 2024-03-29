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
  const validCode = () => {
    if (inputs.code.length >= 2 && inputs.code.length <= 10) return true;
  };
  if (!validCode) {
    invalids.push("code");
    validationState = false;
  }

  // Validating: alias
  const validAlias = () => {
    if (inputs.alias.length >= 2 && inputs.alias.length <= 10) return true;
  };
  if (!validAlias) {
    invalids.push("alias");
    validationState = false;
  }

  // Validating: description
  const validDescription = () => {
    if (inputs.description.length >= 2 && inputs.description.length <= 10)
      return true;
  };
  if (!validDescription) {
    invalids.push("description");
    validationState = false;
  }

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
  const validIsDepreciableAsset = () => {
    if (inputs.isDepreciableAsset in DepreciableAsset) return true;
  };
  if (!validIsDepreciableAsset) {
    invalids.push("isDepreciableAsset");
    validationState = false;
  }

  // Validating: remarks
  const validRemarks = () => {
    if (inputs.remarks) {
      if (inputs.remarks.length >= 2 && inputs.remarks.length <= 10) {
        return true;
      } else return false;
    } else return true;
  };
  if (!validRemarks) {
    invalids.push("remarks");
    validationState = false;
  }

  // Validating: createdBy
  const validCreatedBy = () => {
    //TODO: check if user available in db or pass if done by middleware
    // for now override to true
    return true;
  };
  if (!validCreatedBy) {
    invalids.push("createdBy");
    validationState = false;
  }

  // Return validation process
  if (validationState) {
    inputsValidation.validation = true;
  } else inputsValidation.validation = false;

  let finalValidation = merge(inputsValidation, { invalids: invalids });
  return finalValidation;
};
