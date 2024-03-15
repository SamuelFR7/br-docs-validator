const cpfBlacklist = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
  "12345678909",
];

/**
 * @param {string} cpf
 * @returns {string}
 */
function format(cpf) {
  return (cpf || "").replace(/[.-]/g, "");
}

/**
 * @param {string} cpf
 * @returns {boolean}
 */
function validFirstDigit(cpf) {
  const firstDigit = parseInt(cpf[9], 10);
  const initialNine = cpf
    .slice(0, 9)
    .split("")
    .map((n) => parseInt(n, 10));

  const multiplied = initialNine.map(
    (number, index) => number * (cpf.length - (index + 1))
  );

  const sum = multiplied.reduce((acc, current) => acc + current, 0);

  const mod = sum % 11;

  if (mod < 2) {
    return firstDigit === 0;
  }

  return 11 - mod === firstDigit;
}

/**
 * @param {string} cpf
 * @returns {boolean}
 */
function validSecondDigit(cpf) {
  const secondDigit = parseInt(cpf[10], 10);
  const initialTen = cpf
    .slice(0, 10)
    .split("")
    .map((n) => parseInt(n, 10));

  const multiplied = initialTen.map(
    (number, index) => number * (cpf.length - index)
  );

  const sum = multiplied.reduce((acc, current) => acc + current, 0);

  const mod = sum % 11;

  if (mod < 2) {
    return secondDigit === 0;
  }

  return 11 - mod === secondDigit;
}

/**
 * @param {string} cpf
 * @returns {boolean}
 */
function isValid(cpf) {
  const formatedCpf = format(cpf);

  if (!formatedCpf) return false;

  if (formatedCpf.length !== 11) return false;

  if (cpfBlacklist.includes(formatedCpf)) return false;

  const firstDigitIsValid = validFirstDigit(formatedCpf);
  const secondDigitIsValid = validSecondDigit(formatedCpf);

  return firstDigitIsValid && secondDigitIsValid;
}

module.exports = {
  isValid,
};
