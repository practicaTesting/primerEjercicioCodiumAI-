# 🧮 Calculadora con CodiumAI  

Este es un mini proyecto de ejemplo donde se implementa una **calculadora básica en JavaScript** y se generan pruebas automatizadas con **CodiumAI (Qodo Gen)**.  

---

## 📂 Contenido del repositorio  

1. **Calculadora en JavaScript**  
   - Funciones básicas: **suma, resta, división** (con manejo de error en división por cero).  

2. **Pruebas automatizadas con CodiumAI (Qodo Gen)**  
   - Generación de casos de prueba automáticos para validar operaciones básicas.  
   - Ejemplos incluidos:  
     - Suma con valores positivos y negativos.  
     - Resta con cero.  
     - Manejo de decimales y precisión.  
     - División con error si el divisor es `0`.  

3. **Documentación con JSDoc**  
   - Cada función incluye comentarios con **JSDoc** para describir parámetros, retorno y errores esperados.  

4. **Configuración del entorno de pruebas**  
   - Uso del módulo `node:test` nativo de Node.js.  
   - Configuración opcional para usar Jest como framework de pruebas.  

---

## 📂 Estructura del proyecto
📦 calculadora-tests
┣ 📜 calculadora.js # Funciones de la calculadora (con JSDoc)
┣ 📜 calculadora.test.js # Pruebas generadas con CodiumAI (Qodo Gen)
┣ 📜 package.json
┣ 📜 README.md

---

## 🚀 Instalación y configuración  

Inicializa el proyecto:  

npm init -y

--

En tu package.json asegúrate de incluir "type": "module" para poder usar import:

{
  "name": "calculadora-tests",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}

--

🔧 Ejecución de pruebas
Con Node.js (módulo node:test):

node --test calculadora.test.js

--

Con Jest (opcional):
Instalar Jest:

npm install --save-dev jest

--

Modificar tu package.json:

"scripts": {
  "test": "jest"
}

-- 

Ejecutar pruebas:

npm test

---

## 🤖 Uso de CodiumAI (Qodo Gen)
1. Selecciona tu función o archivo (ej: calculadora.js).
2. Haz clic derecho → Qodo Gen → Enhance this code.
- Esto genera automáticamente documentación JSDoc.
3. Para generar casos de prueba, se le pide a la IA directamente y los inserta en un archivo de test.

---
## 🚀 Objetivo

El objetivo es practicar la integración de pruebas y documentación en proyectos simples.