const cpf = require("./cpf");
const cnpj = require("./cnpj");
const { strip } = require("./");

/**
 * @param {string} cpfOrCnpj
 * @returns {boolean}
 */
function isValid(cpfOrCnpj) {
  const formatedCpfOrCnpj = strip(cpfOrCnpj);

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
