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

function format(cpf: string) {
  return (cpf || "").replace(/[.-]/g, "");
}

function validFirstDigit(cpf: string) {
  const digit = cpf[9];

  if (!digit) {
    return false;
  }

  const firstDigit = parseInt(digit, 10);
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

function validSecondDigit(cpf: string) {
  const digit = cpf[10];

  if (!digit) {
    return false;
  }

  const secondDigit = parseInt(digit, 10);
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

function isValid(cpf: string) {
  const formatedCpf = format(cpf);

  if (!formatedCpf) return false;

  if (formatedCpf.length !== 11) return false;

  if (cpfBlacklist.includes(formatedCpf)) return false;

  const firstDigitIsValid = validFirstDigit(formatedCpf);
  const secondDigitIsValid = validSecondDigit(formatedCpf);

  return firstDigitIsValid && secondDigitIsValid;
}

function punctuated(cpf: string) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}

export { isValid, punctuated };
