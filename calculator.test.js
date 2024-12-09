// Engenharia de software 2 - Atividade prática 4
// Henrique César

const { add, subtract, multiply, divide, exp } = require('./calculator');

describe("Calculator Tests", () => {
    test("Addition of positive numbers", () => {
        expect(add(2, 3)).toBe(5);
        expect(add(0, 7)).toBe(7);
    });

    test("Addition of negative numbers", () => {
        expect(add(-1, -3)).toBe(-4);
        expect(add(-5, 5)).toBe(0);
    });

    test("Subtraction of numbers", () => {
        expect(subtract(10, 5)).toBe(5);
        expect(subtract(0, 3)).toBe(-3);
    });

    test("Multiplication of numbers", () => {
        expect(multiply(4, 3)).toBe(12);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test("Division of numbers", () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
    });

    test("Division by zero", () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });

    test('Exponentiation of positive number', () => {
        expect(exp(2,4)).toBe(16);
      });
      
      test('Exponentiation of zero', () => {
        expect(exp(1,0)).toBe(1);
      });
      
      test('Exponentiation of negative number', () => {
        expect(exp(-1,2)).toBe(1); 
      });
});