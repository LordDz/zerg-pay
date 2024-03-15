export const addSpacesToCreditCardNumber = (value: string): string => {
  // Regular expression to match every 5th digit
  const regex = /(.{4})(?=.)/g;
  // Replace every 5th digit with itself plus a space
  return value.replace(regex, "$1 ");
};
