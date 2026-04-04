/**
 * Unit tests for calculator.js
 * Tests all four basic arithmetic operations and edge cases
 */

const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition Operation', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers correctly', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers correctly', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction Operation', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in a negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract decimal numbers correctly', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });

    test('should subtract a number from itself', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  describe('Multiplication Operation', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });
  });

  describe('Division Operation', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in a decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide decimal numbers correctly', () => {
      expect(divide(10.5, 2.1)).toBeCloseTo(5);
    });

    test('should divide a number by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Calculate Function with Symbol Operators', () => {
    test('should calculate addition with + operator', () => {
      expect(calculate('+', 2, 3)).toBe(5);
    });

    test('should calculate subtraction with - operator', () => {
      expect(calculate('-', 10, 4)).toBe(6);
    });

    test('should calculate multiplication with * operator', () => {
      expect(calculate('*', 45, 2)).toBe(90);
    });

    test('should calculate division with / operator', () => {
      expect(calculate('/', 20, 5)).toBe(4);
    });
  });

  describe('Calculate Function with Word Operators', () => {
    test('should calculate addition with add word', () => {
      expect(calculate('add', 2, 3)).toBe(5);
    });

    test('should calculate subtraction with subtract word', () => {
      expect(calculate('subtract', 10, 4)).toBe(6);
    });

    test('should calculate multiplication with multiply word', () => {
      expect(calculate('multiply', 45, 2)).toBe(90);
    });

    test('should calculate division with divide word', () => {
      expect(calculate('divide', 20, 5)).toBe(4);
    });
  });

  describe('Calculate Function with String Numbers', () => {
    test('should handle string numbers for addition', () => {
      expect(calculate('+', '2', '3')).toBe(5);
    });

    test('should handle string numbers for subtraction', () => {
      expect(calculate('-', '10', '4')).toBe(6);
    });

    test('should handle string numbers for multiplication', () => {
      expect(calculate('*', '45', '2')).toBe(90);
    });

    test('should handle string numbers for division', () => {
      expect(calculate('/', '20', '5')).toBe(4);
    });
  });

  describe('Error Handling', () => {
    test('should throw error for invalid operation', () => {
      expect(() => calculate('&', 5, 3)).toThrow('Unknown operation');
    });

    test('should throw error for non-numeric first argument', () => {
      expect(() => calculate('+', 'abc', 5)).toThrow('Invalid input');
    });

    test('should throw error for non-numeric second argument', () => {
      expect(() => calculate('+', 5, 'xyz')).toThrow('Invalid input');
    });

    test('should throw error for division by zero', () => {
      expect(() => calculate('/', 10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for divide word with zero divisor', () => {
      expect(() => calculate('divide', 10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Edge Cases and Special Values', () => {
    test('should handle operations with very small decimals', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle operations with scientific notation', () => {
      expect(multiply(1e2, 2)).toBe(200);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 5)).toBe(5);
    });

    test('should handle very large numbers from division', () => {
      expect(divide(1, 0.000001)).toBe(1000000);
    });
  });
});
