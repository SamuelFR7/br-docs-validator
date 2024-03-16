/**
 * @param {string} value
 * @returns {string}
 */
function strip(value) {
  return (value || "").replace(/[^\d]/g, "");
}

module.exports = {
  strip,
};
