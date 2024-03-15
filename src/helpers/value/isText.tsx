export const isText = (value: string): boolean => {
  return /^[a-zA-Z\s]*$/.test(value);
};
