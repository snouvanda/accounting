import { Request, Response } from "express";
import { AccountData } from "@/types/customTypes";
import { isAccountInputsValid } from "@/helpers/validations/accountsValidation";

/*
Controller responsible to:
- Validate input data from http request.
- Transform specific data from request body before send to repo.
- Transform specific data from repo before send to response body.
*/

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
      !inputs.isDeprcAsset ||
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

    // 5. Create account

    // 6. Return respond

    //
  } catch (error) {
    //TODO: log event
    console.log(error);
    return res.sendStatus(500);
  }
};
