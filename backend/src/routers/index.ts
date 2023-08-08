import express from "express";
import homeR from "@/routers/homeRouter";
import accountsR from "@/routers/accountRouter";
import transactionsR from "@/routers/transactionRouter";

const router = express.Router();

export default (): express.Router => {
  homeR(router);
  accountsR(router);
  transactionsR(router);
  return router;
};
