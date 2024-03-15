export const isNumeric = (value: string): boolean => {
  return /^\s*\d+(\s+\d+)*\s*$/.test(value);
};
