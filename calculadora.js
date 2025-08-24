/**
 * Suma dos números.
 * @param {number} a - Primer operando.
 * @param {number} b - Segundo operando.
 * @returns {number} La suma de a y b.
 */
const suma = (a, b) => a + b;

/**
 * Resta dos números.
 * @param {number} a - Primer operando.
 * @param {number} b - Segundo operando.
 * @returns {number} La diferencia entre a y b.
 */
const resta = (a, b) => a - b;

const DIVISION_BY_ZERO_MSG = "No se puede dividir entre cero";

/**
 * Divide a entre b.
 * Lanza un Error si b === 0 para evitar división entre cero.
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor.
 * @returns {number} El cociente de a y b.
 * @throws {Error} Si b es 0.
 */
const division = (a, b) => {
  if (b === 0) throw new Error(DIVISION_BY_ZERO_MSG);
  return a / b;
};

export { suma, resta, division };