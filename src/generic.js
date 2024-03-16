const cpf = require("./cpf");
const cnpj = require("./cnpj");
const utils = require("./utils");

/**
 * @param {string} cpfOrCnpj
 * @returns {boolean}
 */
function isValid(cpfOrCnpj) {
  const formatedCpfOrCnpj = utils.strip(cpfOrCnpj);

  if (formatedCpfOrCnpj.length === 14) {
    return cnpj.isValid(cpfOrCnpj);
  }

  if (formatedCpfOrCnpj.length === 11) {
    return cpf.isValid(cpfOrCnpj);
  }

  return false;
}

/**
 * @param {string} cpfOrCnpj
 * @returns {string}
 */
function punctuated(cpfOrCnpj) {
  if (cpfOrCnpj.length === 14) {
    return cnpj.punctuated(cpfOrCnpj);
  }

  if (cpfOrCnpj.length === 11) {
    return cpf.punctuated(cpfOrCnpj);
  }

  return "";
}

module.exports = {
  isValid,
  punctuated,
};
