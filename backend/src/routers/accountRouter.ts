import express from "express";
import { createAccount } from "@/controllers/accountsController";

const pathStr: string = "/accounts";
const idStr: string = "/:id";

export default (router: express.Router) => {
  router.post(pathStr, createAccount);
};
