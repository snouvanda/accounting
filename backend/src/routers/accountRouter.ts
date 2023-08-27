import express from "express";
import { createAccount, getAccounts } from "@/controllers/accountsController";

const pathStr: string = "/accounts";
const idStr: string = "/:id";

export default (router: express.Router) => {
  router.get(pathStr, getAccounts);
  router.post(pathStr, createAccount);
};
