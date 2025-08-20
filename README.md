1. Inicializa el proyecto con:
npm init -y

2. En tu package.json debes tener "type": "module" para poder usar import. Ejemplo:
{
  "name": "calculadora-tests",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}

3. Instalar CodiumAI: en el navegador y la extension en Visual Studio Code:
Una vez instalado, ábrelo y inicia sesión (te pedirá registrarte con GitHub/Google).
se abrira un chat a mano izquierda y ya puedes pedir lo que necesites.

NOTA: Para ejecutar los test: " node --test ejercicio/calculadora.test.js "



OTRA FORMA: para generar pruebas. con Jest seria:
npm install --save-dev jest
- Agrega en tu package.json esta línea dentro de "scripts":
"scripts": {
  "test": "jest"
}

ESTO ES PARA QUE NOS AYUDE A HACER LA DOCUEMNTACION (agregar documentación JSDoc):
- Selecciona tu función o archivo (ej: calculadora.js).
- Haz clic derecho → Qodo Gen → Enhance this code.
