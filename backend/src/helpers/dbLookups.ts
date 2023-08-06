import {
  AccountCategory,
  AccountClassification,
  AccountNormalBalance,
  DepreciableAsset,
  JournalCategory,
  LookupField as LF,
} from "@/enums/dbEnums";

export const lookupDbToApp = (
  lookup: LF,
  value: string | number
): string | undefined => {
  if (typeof value === "string") {
    switch (lookup) {
      case LF.AccountCategory:
        const idxOfCategory = Object.values(AccountCategory).indexOf(
          value as unknown as AccountCategory
        );
        const keyOfCategory = Object.keys(AccountCategory)[idxOfCategory];
        return keyOfCategory;
        break;

      case LF.AccountClassification:
        const idxOfClassification = Object.values(
          AccountClassification
        ).indexOf(value as unknown as AccountClassification);
        const keyOfClassification = Object.keys(AccountClassification)[
          idxOfClassification
        ];
        return keyOfClassification;
        break;

      case LF.AccountNormalBalance:
        const idxOfNormalBalance = Object.values(AccountNormalBalance).indexOf(
          value as unknown as AccountNormalBalance
        );
        const keyOfNormalBalance =
          Object.keys(AccountNormalBalance)[idxOfNormalBalance];
        return keyOfNormalBalance;
        break;

      case LF.DepreciableAsset:
        const idxOfDepreciableAsset = Object.values(DepreciableAsset).indexOf(
          value as unknown as DepreciableAsset
        );
        const keyOfDepreciableAsset =
          Object.keys(DepreciableAsset)[idxOfDepreciableAsset];
        return keyOfDepreciableAsset;
        break;

      case LF.JournalCategory:
        const idxOfJournalCategory = Object.values(JournalCategory).indexOf(
          value as unknown as JournalCategory
        );
        const keyOfJournalCategory =
          Object.keys(JournalCategory)[idxOfJournalCategory];
        return keyOfJournalCategory;
        break;
    }
  }
};
