export enum JournalCategory {
  Transaction = "T",
  Adjusting = "A",
  Closing = "C",
  Fixing = "F",
  Reversing = "R",
  Opening = "O",
}

export enum AccountClassification {
  Asset = "A",
  Liability = "L",
  Equity = "E",
  Revenue = "R",
  Expense = "X",
  Optional = "O",
}

export enum AccountCategory {
  Real = "R",
  Nominal = "N",
}

export enum AccountNormalBalance {
  Debit = "D",
  Credit = "C",
}

export enum DepreciableAsset {
  Tangible = "T",
  Intangible = "I",
  None = "N",
}
