import test from 'node:test';
import assert from 'node:assert/strict';
import { suma, resta, division } from './calculadora.js';

/**
 * Suite de pruebas para calculadora.js
 * Requisitos:
 * - Node 18+ (para usar node:test)
 * - Proyecto en ESM (package.json con "type": "module" o archivos .mjs)
 */

test('suma', async (t) => {
  await t.test('suma enteros positivos', () => {
    assert.strictEqual(suma(2, 3), 5);
  });

  await t.test('suma con negativos', () => {
    assert.strictEqual(suma(-2, 5), 3);
    assert.strictEqual(suma(-4, -6), -10);
  });

  await t.test('suma con cero', () => {
    assert.strictEqual(suma(0, 7), 7);
    assert.strictEqual(suma(7, 0), 7);
  });

  await t.test('suma con decimales (manejo de precisión)', () => {
    const r = suma(0.1, 0.2);
    assert.ok(Math.abs(r - 0.3) < 1e-10, `Esperado ≈0.3, recibido ${r}`);
  });
});

test('resta', async (t) => {
  await t.test('resta enteros positivos', () => {
    assert.strictEqual(resta(5, 3), 2);
  });

  await t.test('resta con negativos', () => {
    assert.strictEqual(resta(-2, 5), -7);
    assert.strictEqual(resta(-4, -6), 2);
  });

  await t.test('resta con cero', () => {
    assert.strictEqual(resta(0, 7), -7);
    assert.strictEqual(resta(7, 0), 7);
  });

  await t.test('resta con decimales (manejo de precisión)', () => {
    const r = resta(0.3, 0.1);
    assert.ok(Math.abs(r - 0.2) < 1e-10, `Esperado ≈0.2, recibido ${r}`);
  });
});

test('division', async (t) => {
  await t.test('divide enteros', () => {
    assert.strictEqual(division(10, 2), 5);
  });

  await t.test('divide con negativos', () => {
    assert.strictEqual(division(-10, 2), -5);
    assert.strictEqual(division(10, -2), -5);
    assert.strictEqual(division(-10, -2), 5);
  });

  await t.test('divide con decimales', () => {
    const r = division(0.3, 0.1);
    assert.ok(Math.abs(r - 3) < 1e-10, `Esperado ≈3, recibido ${r}`);
  });

  await t.test('dividendo cero', () => {
    assert.strictEqual(division(0, 5), 0);
    assert.strictEqual(division(0, -5), -0); // 0 con signo negativo en JS es -0; numéricamente equivale a 0
  });

  await t.test('lanza error al dividir entre cero (0 y -0)', () => {
    assert.throws(
      () => division(1, 0),
      { name: 'Error', message: 'No se puede dividir entre cero' }
    );

    // -0 === 0 en JS, por lo que también debe lanzar
    const minusZero = -0;
    assert.throws(
      () => division(1, minusZero),
      { name: 'Error', message: 'No se puede dividir entre cero' }
    );
  });
});