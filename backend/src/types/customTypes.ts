export interface AccountData {
  id: number;
  code: string;
  alias: string;
  description: string;
  classification: string;
  category: string;
  normalBalance: string;
  isDepreciableAsset: string;
  remarks?: string;
  createdAt?: Date;
  createdBy: string;
  updatedAt?: Date | null;
  updatedBy?: string | null;
  deleted?: Date | null;
  deletedBy?: string | null;
}

export interface AccountDataRemovable {
  id?: number | undefined;
  code?: string | undefined;
  alias?: string | undefined;
  description?: string;
  classification?: string;
  category?: string;
  normalBalance?: string;
  isDepreciableAsset?: string;
  remarks?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date | null;
  updatedBy?: string | null;
  deleted?: Date | null;
  deletedBy?: string | null;
}

export interface AccountDataForDelete {
  id: number;
  deletedBy: string;
}
