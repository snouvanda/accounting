export const isEmailValid = (email: string) => {
  const EMAIL_REGEX: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validEmail = EMAIL_REGEX.test(email);

  if (validEmail) return true;
  return false;
};

export const isNumberInputValid = (value: any) => {
  if (typeof value === "number" && value >= 0) {
    return {
      validation: true,
      value: value,
    };
  }

  // if invalid
  return {
    validation: false,
    value: null,
  };
};

export const isDateInputValid = (date: any) => {
  const DATE_REGEX: RegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

  const validDate = DATE_REGEX.test(date);

  if (validDate) {
    return {
      validation: true,
      value: date,
    };
  }

  // if invalid
  return {
    validation: false,
    value: null,
  };
};
