const cnpjBlacklist = [
  "00000000000000",
  "11111111111111",
  "22222222222222",
  "33333333333333",
  "44444444444444",
  "55555555555555",
  "66666666666666",
  "77777777777777",
  "88888888888888",
  "99999999999999",
];

/**
 * @param {string} cnpj
 * @returns {string}
 */
function format(cnpj) {
  return (cnpj || "").replace(/[-\\/.]/g, "");
}

/**
 * @param {string} cnpj
 * @return {boolean}
 */
function validFirstDigit(cnpj) {
  const firstDigit = parseInt(cnpj[12], 10);
  const initialTwelve = cnpj
    .slice(0, 12)
    .split("")
    .map((n) => parseInt(n, 10));

  const multiplied = initialTwelve.map((number, index) => {
    if (index <= 3) {
      return number * (5 - index);
    }

    return number * (13 - index);
  });

  const sum = multiplied.reduce((acc, current) => acc + current, 0);

  const mod = sum % 11;

  if (mod < 2) {
    return firstDigit === 0;
  }

  return 11 - mod === firstDigit;
}

/**
 * @param {string} cnpj
 * @returns {boolean}
 */
function validSecondDigit(cnpj) {
  const secondDigit = parseInt(cnpj[13], 10);
  const firstThirteen = cnpj
    .slice(0, 13)
    .split("")
    .map((n) => parseInt(n, 10));

  const multiplied = firstThirteen.map((number, index) => {
    if (index <= 4) {
      return number * (6 - index);
    }

    return number * (14 - index);
  });

  const sum = multiplied.reduce((acc, current) => acc + current, 0);

  const mod = sum % 11;

  if (mod < 2) {
    return secondDigit === 0;
  }

  return 11 - mod === secondDigit;
}

/**
 * @param {string} cnpj
 * @returns {boolean}
 */
function isValid(cnpj) {
  const formatedCnpj = format(cnpj);

  if (!formatedCnpj) return false;

  if (formatedCnpj.length !== 14) return false;

  if (cnpjBlacklist.includes(formatedCnpj)) return false;

  const firstDigitIsValid = validFirstDigit(formatedCnpj);
  const secondDigitIsValid = validSecondDigit(formatedCnpj);

  return firstDigitIsValid && secondDigitIsValid;
}

/**
 * @param {string} cnpj
 * @returns {string}
 */
function punctuated(cnpj) {
  return cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}

module.exports = {
  isValid,
  punctuated,
};
