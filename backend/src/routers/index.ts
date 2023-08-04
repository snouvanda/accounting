import express from "express";
import home from "./homeRouter";
import transaction from "./transactionRouter";

const router = express.Router();

export default (): express.Router => {
  home(router);
  transaction(router);
  return router;
};
