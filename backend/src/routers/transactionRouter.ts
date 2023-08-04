import express from "express";
import {
  getAllTransactions,
  getTransactionById,
} from "../controllers/transactionController";

const pathStr: string = "/transactions";
const idStr: string = "/:id";

export default (router: express.Router) => {
  router.get(pathStr, getAllTransactions);
  router.get(pathStr + idStr, getTransactionById);
  router.post(pathStr);
  router.patch(pathStr + idStr);
  router.delete(pathStr + idStr);
};
