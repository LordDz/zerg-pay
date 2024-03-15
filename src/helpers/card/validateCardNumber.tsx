export const validateCardNumber = (creditCardNumber: string): boolean => {
  // Remove spaces and non-numeric characters from the input
  const sanitizedNumber = creditCardNumber.replace(/\D/g, "");

  // Convert the string to an array of digits and reverse it
  const digits = sanitizedNumber.split("").map(Number).reverse();

  // Double every second digit starting from the right
  const doubledDigits = digits.map((digit, index) =>
    index % 2 === 1 ? digit * 2 : digit
  );

  // Sum all the digits, with numbers greater than 9 treated as separate digits
  const summedDigits = doubledDigits.map((digit) =>
    digit > 9 ? digit - 9 : digit
  );

  // Calculate the total sum of all digits
  const total = summedDigits.reduce((acc, digit) => acc + digit, 0);

  // If the total is divisible by 10, the credit card number is valid
  return total % 10 === 0;
};
