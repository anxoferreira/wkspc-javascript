import { describe, it, expect } from "vitest";
import { sumar } from "./calculadora.js";

describe("Calculadora", () => {
  it("suma dos positivos", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  it("suma dos negativos", () => {
    expect(sumar(-2, -3)).toBe(-5);
  });

  it("suma con cero", () => {
    expect(sumar(8, 0)).toBe(8);
  });
});
