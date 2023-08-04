import { PrismaClient } from "@prisma/client";
import { merge } from "lodash";
import { activeRowCriteria, metaFields } from "../configs/dbRecordFilter";
import { AccountData } from "../types/customTypes";
const prisma = new PrismaClient();

export const createNewAccount = async (values: AccountData) => {
  const data: AccountData = values;
  const account = await prisma.accounts.create({
    data: {
      id: data.id,
      description: data.description,
      classification: data.classification,
      category: data.category,
      normalBalance: data.normalBalance,
      isDeprcAsset: data.isDeprcAsset,
      remarks: data.remarks,
      createdBy: data.createdBy,
    },
    select: {
      id: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDeprcAsset: true,
      remarks: true,
      createdBy: true,
      createdAt: true,
    },
  });

  return account;
};

export const getAccounts = async (): Promise<AccountData[] | {}> => {
  const accounts = await prisma.accounts.findMany({
    where: activeRowCriteria,
    select: {
      id: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDeprcAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return accounts;
};

export const getAccountById = async (id: string) => {
  const account = await prisma.accounts.findFirst({
    where: merge({ id: id }, activeRowCriteria),
    select: {
      id: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDeprcAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return account;
};

export const updateAccountById = async (values: AccountData) => {
  const data: AccountData = values;
  const account = await prisma.accounts.update({
    where: { id: data.id },
    data: {
      id: data.id,
      description: data.description,
      classification: data.classification,
      category: data.category,
      normalBalance: data.normalBalance,
      isDeprcAsset: data.isDeprcAsset,
      remarks: data.remarks,
      updatedBy: data.updatedBy,
    },
    select: {
      id: true,
      description: true,
      classification: true,
      category: true,
      normalBalance: true,
      isDeprcAsset: true,
      remarks: true,
      createdAt: true,
      createdBy: true,
      updatedAt: true,
      updatedBy: true,
    },
  });
  return account;
};

export const deleteAccountById = async (id: string, deletedBy: string) => {
  const account = await prisma.accounts.update({
    where: { id: id },
    data: {
      deletedBy: deletedBy,
      deleted: new Date(),
    },
  });
  return { message: `Account with Id: ${id} deleted` };
};
