# 🧮 Calculadora con CodiumAI  

Este es un mini proyecto de ejemplo donde se implementa una **calculadora básica en JavaScript** y se generan pruebas automatizadas con **CodiumAI (Qodo Gen)**.  
El objetivo es **practicar la integración de pruebas en proyectos simples**, aplicando buenas prácticas de calidad.  

---

## 📂 Contenido del repositorio  

1. **Calculadora en JavaScript**  
   - Funciones básicas: suma, resta, multiplicación y división.  

2. **Pruebas automatizadas con CodiumAI (Qodo Gen)**  
   - Generación de casos de prueba automáticos para validar operaciones básicas.  
   - Ejemplos incluidos:  
     - Suma con valores positivos y negativos.  
     - Resta con cero.  
     - Manejo de decimales y precisión.  

3. **Configuración del entorno de pruebas**  
   - Uso del módulo `node:test` nativo de Node.js.  
   - Configuración opcional para usar Jest como framework de pruebas.  

---

## 🚀 Instalación y configuración  

Inicializa el proyecto:  
npm init -y

En tu package.json asegúrate de incluir "type": "module" para poder usar import:
{
  "name": "calculadora-tests",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}

🔧 Ejecución de pruebas
Con Node.js (módulo node:test):
node --test calculadora.test.js


Con Jest (opcional):
Instalar Jest:
npm install --save-dev jest

Modificar tu package.json:
"scripts": {
  "test": "jest"
}

Ejecutar pruebas:
npm test


📂 Estructura del proyecto
📦 calculadora-tests
 ┣ 📜 calculadora.js        # Funciones de la calculadora
 ┣ 📜 calculadora.test.js   # Pruebas generadas con CodiumAI (Qodo Gen)
 ┣ 📜 package.json
 ┣ 📜 README.md


🤖 Uso de CodiumAI (Qodo Gen)
Selecciona tu función o archivo (ej: calculadora.js).
Haz clic derecho → Qodo Gen → Enhance this code.
Esto genera automáticamente documentación JSDoc.
Ya para genenerar los casos de prueba se le pide a la IA.