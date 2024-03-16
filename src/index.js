const cnpj = require("./cnpj");
const cpf = require("./cpf");
const generic = require("./generic");

/**
 * @param {string} value
 * @returns {string}
 */
function strip(value) {
  return (value || "").replace(/[^\d]/g, "");
}

module.exports = {
  cnpj,
  cpf,
  generic,
  strip,
};
