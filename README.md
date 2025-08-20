🧮 Calculadora con CodiumAI
Este es un mini proyecto de ejemplo donde se implementa una calculadora básica en JavaScript y se generan pruebas automáticas con CodiumAI.
El objetivo es practicar la integración de pruebas y documentación en proyectos simples.


🚀 Instalación y configuración
Inicializa el proyecto:
npm init -y

En tu package.json asegúrate de incluir "type": "module" para poder usar import.
Ejemplo:
{
  "name": "calculadora-tests",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}

🔧 Ejecución de pruebas
node --test ejercicio/calculadora.test.js


🤖 Con Jest (opcional)
Instalar Jest:
npm install --save-dev jest

Modificar tu package.json:
"scripts": {
  "test": "jest"
}

🔧 Ejecutar:
npm test


📂 Estructura del proyecto
📦 calculadora-tests
 ┣ 📂 ejercicio
 ┃ ┣ 📜 calculadora.js      # Funciones de la calculadora
 ┃ ┣ 📜 calculadora.test.js # Pruebas generadas con CodiumAI
 ┣ 📜 package.json
 ┣ 📜 README.md

 
Selecciona tu función o archivo (ej: calculadora.js).
Haz clic derecho → Qodo Gen → Enhance this code para:
Esto genera documentación (JSDoc).

📌 Notas
Este proyecto es únicamente con fines de práctica.
CodiumAI ayuda a generar pruebas y documentación automática.

