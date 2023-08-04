import { Request, Response } from "express";

export const getAllTransactions = (req: Request, res: Response) => {
  console.log("accessing controller: getAllTransactions");
  try {
    return res
      .status(200)
      .json({ message: "accessing controller: getAllTransactions" });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const getTransactionById = (req: Request, res: Response) => {
  console.log("accessing controller: getTransactionById");
  const { id } = req.params;
  try {
    return res.status(200).json({
      message: "accessing controller: getTransactionById",
      transactionId: id,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
