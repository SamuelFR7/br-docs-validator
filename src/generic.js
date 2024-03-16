const cpf = require("./cpf");
const cnpj = require("./cnpj");

/**
 * @param {string} cpfOrCnpj
 * @returns {bool}
 */
function isValid(cpfOrCnpj) {
  const formatedCpfOrCnpj = cpfOrCnpj.replace(/[^\d]/g, "");

  if (formatedCpfOrCnpj.length === 14) {
    return cnpj.isValid(cpfOrCnpj);
  }

  if (formatedCpfOrCnpj.length === 11) {
    return cpf.isValid(cpfOrCnpj);
  }

  return false;
}

module.exports = {
  isValid,
};
