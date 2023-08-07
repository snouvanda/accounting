import express from "express";
import home from "@/routers/homeRouter";
import transaction from "@/routers/transactionRouter";

const router = express.Router();

export default (): express.Router => {
  home(router);
  transaction(router);
  return router;
};
