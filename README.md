## 🧮 Calculadora con CodiumAI  

Mini proyecto desarrollado para practicar **testing automatizado, documentación de código y uso de Inteligencia Artificial como herramienta de apoyo durante el desarrollo.**

El proyecto consiste en una calculadora básica desarrollada en **JavaScript**, acompañada de pruebas automatizadas y documentación **JSDoc** generadas y/o asistidas mediante **CodiumAI (Qodo Gen).**

---
## 🎯 Objetivo

El objetivo de este proyecto es explorar cómo una herramienta de **Inteligencia Artificial como CodiumAI (Qodo Gen)** puede utilizarse como apoyo en diferentes etapas del desarrollo y testing de software.

Para ello, se desarrolló una calculadora con operaciones matemáticas básicas y posteriormente se utilizó Qodo Gen para:

- 🤖 **Generar y proponer casos de prueba** para validar el comportamiento de las funciones.
- 🧪 **Crear pruebas automatizadas** para comprobar diferentes escenarios, incluyendo casos normales y casos límite.
- 📝 **Generar documentación JSDoc** para describir las funciones, sus parámetros, valores de retorno y posibles errores.
- 🔍 **Identificar escenarios que deberían ser validados** dentro de las pruebas.

Las pruebas generadas fueron revisadas para comprobar que los casos propuestos fueran coherentes con el comportamiento esperado de la aplicación.

De esta manera, el proyecto busca mostrar cómo la IA puede utilizarse como **herramienta de apoyo para mejorar la cobertura de pruebas y la documentación del código**, sin sustituir la revisión y criterio del desarrollador.

---
## 🧮 Funcionalidades

La calculadora implementa las siguientes operaciones:

- ➕ **Suma**
- ➖ **Resta**
- ✖️ **Multiplicación**
- ➗ **División**
- ⚠️ **Manejo de división por cero**

Las funciones cuentan con documentación mediante **JSDoc**.

---
## 🧪 Pruebas automatizadas

Las pruebas fueron desarrolladas con ayuda de **CodiumAI (Qodo Gen)** y ejecutadas utilizando el módulo nativo node:test de Node.js.

Se contemplan diferentes escenarios, entre ellos:

- Suma con números positivos.
- Suma con números negativos.
- Resta utilizando cero.
- Multiplicación con diferentes valores.
- Operaciones con números decimales.
- Validación de resultados esperados.
- División entre números.
- Manejo del error al intentar dividir entre 0.

Esto permite comprobar tanto el comportamiento esperado de las funciones como algunos casos límite.

---
## 📝 Documentación con JSDoc

La documentación de las funciones fue generada con apoyo de **CodiumAI (Qodo Gen)** utilizando comentarios JSDoc.

La documentación permite identificar de forma clara:

- Los parámetros que recibe cada función.
- El tipo de dato de los parámetros.
- El valor que retorna.
- Los posibles errores que puede producir una función.

---

## 📂 Estructura del proyecto
📦 calculadora-tests

┣ 📜 calculadora.js  # Contiene las funciones de la calculadora y su documentación JSDoc.

┣ 📜 calculadora.test.js  # Contiene las pruebas automatizadas generadas con apoyo de Qodo Gen.

┣ 📜 package.json  # Contiene la configuración y los scripts del proyecto.

┣ 📜 README.md  # Documentación del proyecto.

---
## ⚙️ Tecnologías y herramientas

- **JavaScript** 	Desarrollo de las funciones de la calculadora.
- **Node.js**	 Ejecución del proyecto y las pruebas.
- **node** 	Framework nativo para pruebas automatizadas.
- **JSDoc**	Documentación de las funciones.
- **CodiumAI (Qodo Gen)**  Generación asistida de pruebas y documentación.

---

## 🚀 Instalación y configuración  

**1. Clonar el repositorio**
- git clone <URL_DEL_REPOSITORIO>
- cd calculadora-tests


**2. Instalar dependencias**

Este proyecto utiliza el módulo nativo node:test, por lo que **no requiere instalar un framework de testing adicional.**

Como el  proyecto ya contiene **package.json**, no es necesario ejecutar **npm init**.


**3. Configuración**

- Puedes ejecutar las pruebas con:

  **npm test**

- También es posible ejecutarlas directamente con:

  **node --test calculadora.test.js**


---

## 📊 Resultado esperado

Al ejecutar las pruebas correctamente, Node.js mostrará el resultado de cada caso y un resumen indicando que las pruebas fueron ejecutadas satisfactoriamente.

El objetivo es verificar que las funciones de la calculadora cumplen con el comportamiento esperado y que los casos de error también son controlados correctamente.

---
## 📚 Aprendizajes

Con este proyecto se practicaron conceptos relacionados con:

- 🧪 Pruebas automatizadas.
- 🤖 Uso de IA como apoyo al testing.
- 📝 Documentación de código con JSDoc.
- 🔎 Identificación de casos normales y casos límite.
- ⚙️ Uso del módulo node:test.
- 📦 Configuración básica de un proyecto Node.js.
- ✅ Revisión y validación de código generado por IA.

---

## 👩‍💻 Autor

**Marithza Castaño**

Proyecto realizado con fines de aprendizaje y práctica en **Testing, QA y desarrollo de software.**

