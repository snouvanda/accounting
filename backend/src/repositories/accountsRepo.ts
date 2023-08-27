import { PrismaClient } from "@prisma/client";
import { merge } from "lodash";
import { activeRowCriteria } from "@/configs/dbRecordFilter";
import {
  AccountData,
  AccountDataForDelete,
  AccountDataRemovable,
} from "@/types/customTypes";
import { AccountUniqueField as AccountUF } from "@/enums/envEnums";

const prisma = new PrismaClient();

export const repoCreateAccount = async (values: AccountData) => {
  const data: AccountData = values;
  const account = await prisma.accounts.create({
    data: {
      code: data.code!,
      alias: data.alias,
      description: data.description,
      classification: data.classification,
      category: data.category,
      normalBalance: data.normalBalance,
      isDepreciableAsset: data.isDepreciableAsset,
      remarks: data.remarks,
      createdBy: data.createdBy,
    },
    select: {
      id: true,
      code: true,
      alias: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDepreciableAsset: true,
      remarks: true,
      createdBy: true,
      createdAt: true,
    },
  });

  return account;
};

export const repoGetAccounts = async (): Promise<AccountData[] | {}> => {
  const accounts = await prisma.accounts.findMany({
    where: activeRowCriteria,
    select: {
      id: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDepreciableAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return accounts;
};

export const repoGetAccountByField = async (
  getBy: AccountUF,
  value: number | string
) => {
  let target = {};
  switch (getBy) {
    case AccountUF.id:
      target = { id: value };
      break;
    case AccountUF.code:
      target = { code: value };
      break;
    case AccountUF.alias:
      target = { alias: value };
      break;
    default:
      target = { id: value };
      break;
  }
  const account = await prisma.accounts.findFirst({
    where: merge(target, activeRowCriteria),
    select: {
      id: true,
      code: true,
      alias: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDepreciableAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return account;
};

export const repoUpdateAccountById = async (
  updateBy: AccountUF,
  values: AccountData
) => {
  let reqData: AccountDataRemovable = values;

  // Removing inputs
  switch (updateBy) {
    case AccountUF.id:
      delete reqData["id"];
      break;
    case AccountUF.code:
      delete reqData["id"];
      delete reqData["code"];
      break;
    case AccountUF.alias:
      delete reqData["id"];
      delete reqData["code"];
      delete reqData["alias"];
      break;
    default:
      break;
  }
  delete reqData["createdAt"];
  delete reqData["createdBy"];

  // Commit to db
  const account = await prisma.accounts.update({
    where: { id: values.id },
    data: reqData,
    select: {
      id: true,
      code: true,
      alias: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDepreciableAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return account;
};

export const repoDeleteAccountById = async (values: AccountDataForDelete) => {
  const account = await prisma.accounts.update({
    where: { id: values.id },
    data: {
      deletedBy: values.deletedBy,
      deleted: new Date(),
    },
  });
  return { message: `Account with Id: ${values.id} deleted` };
};
