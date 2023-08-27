import { Request, Response } from "express";
import { AccountData } from "@/types/customTypes";
import { isAccountInputsValid } from "@/helpers/validations/accountsValidation";
import { LookupField as LF } from "@/enums/dbEnums";
import { lookupAppToDB, lookupDbToApp } from "@/helpers/dbLookups";
import {
  repoCreateAccount,
  repoGetAccounts,
} from "@/repositories/accountsRepo";

/*
Controller responsible to:
- Validate input data from http request.
- Transform specific data from request body before send to repo.
- Transform specific data from repo before send to response body.
*/

export const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await repoGetAccounts();
    if (!accounts) {
      return res.status(204).json({ message: "No accounts found." });
    }
    return res.json(accounts);
  } catch (error) {
    //TODO: log event
    console.log(error);
    return res.sendStatus(500);
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    // 1. Prepare inputs object
    const inputs: AccountData = req.body;

    // 2. Check if mandatory properties are available in inputs object
    if (
      !inputs.code ||
      !inputs.alias ||
      !inputs.description ||
      !inputs.classification ||
      !inputs.category ||
      !inputs.normalBalance ||
      !inputs.isDepreciableAsset ||
      !inputs.createdBy
    ) {
      return res
        .status(400)
        .json({ message: "All mandatory fields are required." });
    }

    // 3. Validate inputs value
    const validInputs = await isAccountInputsValid(inputs);
    if (!validInputs.validation) {
      return res.status(400).json(validInputs);
    }

    // 4. Transform inputs value
    let data: AccountData = inputs;
    data.classification = lookupAppToDB(
      LF.AccountClassification,
      inputs.classification
    )!;
    data.category = lookupAppToDB(LF.AccountCategory, inputs.category)!;
    data.normalBalance = lookupAppToDB(
      LF.AccountNormalBalance,
      inputs.normalBalance
    )!;
    data.isDepreciableAsset = lookupAppToDB(
      LF.DepreciableAsset,
      inputs.isDepreciableAsset
    )!;

    // 5. Create account
    const newAccount = await repoCreateAccount(data);

    // 6. Transform and return respond
    newAccount.classification = lookupDbToApp(
      LF.AccountClassification,
      newAccount.classification
    )!;
    newAccount.category = lookupDbToApp(
      LF.AccountCategory,
      newAccount.category
    )!;
    newAccount.normalBalance = lookupDbToApp(
      LF.AccountNormalBalance,
      newAccount.normalBalance
    )!;
    newAccount.isDepreciableAsset = lookupDbToApp(
      LF.DepreciableAsset,
      newAccount.isDepreciableAsset
    )!;

    return res.status(200).json(newAccount);

    //
  } catch (error) {
    //TODO: log event
    console.log(error);
    return res.sendStatus(500);
  }
};
