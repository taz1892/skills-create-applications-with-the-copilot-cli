#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supports seven mathematical operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation/Power (**)
 * - Square Root (sqrt)
 */

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

/**
 * Modulo operation
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

/**
 * Power operation
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * @param {number} n - Number to find the square root of
 * @returns {number} Square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n);
}

/**
 * Main calculator function that performs the specified operation
 * @param {string} operation - The operation to perform (+, -, *, /, %, **, sqrt)
 * @param {number|string} num1 - First number
 * @param {number|string} num2 - Second number (optional for sqrt)
 * @returns {number} Result of the operation
 * @throws {Error} If operation is unknown or inputs are invalid
 */
function calculate(operation, num1, num2) {
  // Handle single-argument operations (sqrt)
  if (operation === "sqrt" || operation === "squareRoot") {
    const n = parseFloat(num1);
    if (isNaN(n)) {
      throw new Error("Invalid input: argument must be a number");
    }
    return squareRoot(n);
  }

  // Handle two-argument operations
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid input: both arguments must be numbers");
  }

  switch (operation) {
    case "+":
    case "add":
      return add(a, b);
    case "-":
    case "subtract":
      return subtract(a, b);
    case "*":
    case "multiply":
      return multiply(a, b);
    case "/":
    case "divide":
      return divide(a, b);
    case "%":
    case "modulo":
      return modulo(a, b);
    case "**":
    case "power":
      return power(a, b);
    default:
      throw new Error(`Unknown operation: ${operation}. Use +, -, *, /, %, **, sqrt`);
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: calculator.js <operation> <num1> [num2]");
    console.error("Operations: + (add), - (subtract), * (multiply), / (divide), % (modulo), ** (power), sqrt (squareRoot)");
    console.error("\nExamples:");
    console.error("  node calculator.js + 10 5      # Output: 15");
    console.error("  node calculator.js - 10 4      # Output: 6");
    console.error("  node calculator.js * 45 2      # Output: 90");
    console.error("  node calculator.js / 20 5      # Output: 4");
    console.error("  node calculator.js % 10 3      # Output: 1");
    console.error("  node calculator.js ** 2 3      # Output: 8");
    console.error("  node calculator.js sqrt 16     # Output: 4");
    process.exit(1);
  }

  try {
    const [operation, num1, num2] = args;
    const result = calculate(operation, num1, num2);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
