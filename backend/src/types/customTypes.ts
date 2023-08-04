export interface AccountData {
  id: string;
  description: string;
  classification: string;
  category: string;
  normalBalance: string;
  isDeprcAsset: string;
  remarks?: string;
  createdAt?: Date;
  createdBy: string;
  updatedAt?: Date | null;
  updatedBy?: string | null;
  deleted?: Date | null;
  deletedBy?: string | null;
}
