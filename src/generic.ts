import { cpf, cnpj, utils } from "./";

function isValid(cpfOrCnpj: string) {
  const formatedCpfOrCnpj = utils.strip(cpfOrCnpj);

  if (formatedCpfOrCnpj.length === 14) {
    return cnpj.isValid(cpfOrCnpj);
  }

  if (formatedCpfOrCnpj.length === 11) {
    return cpf.isValid(cpfOrCnpj);
  }

  return false;
}

function punctuated(cpfOrCnpj: string) {
  if (cpfOrCnpj.length === 14) {
    return cnpj.punctuated(cpfOrCnpj);
  }

  if (cpfOrCnpj.length === 11) {
    return cpf.punctuated(cpfOrCnpj);
  }

  return "";
}

export { isValid, punctuated };
