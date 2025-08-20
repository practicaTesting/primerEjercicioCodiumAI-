function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre cero");
  return a / b;
}

export {
    suma, 
    resta, 
    division
}