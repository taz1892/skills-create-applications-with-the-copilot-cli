#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supports four basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
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
 * Main calculator function that performs the specified operation
 * @param {string} operation - The operation to perform (+, -, *, /)
 * @param {number|string} num1 - First number
 * @param {number|string} num2 - Second number
 * @returns {number} Result of the operation
 * @throws {Error} If operation is unknown or inputs are invalid
 */
function calculate(operation, num1, num2) {
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
    default:
      throw new Error(`Unknown operation: ${operation}. Use +, -, *, or /`);
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error("Usage: calculator.js <operation> <num1> <num2>");
    console.error("Operations: + (add), - (subtract), * (multiply), / (divide)");
    console.error("\nExamples:");
    console.error("  node calculator.js + 10 5    # Output: 15");
    console.error("  node calculator.js - 10 4    # Output: 6");
    console.error("  node calculator.js * 45 2    # Output: 90");
    console.error("  node calculator.js / 20 5    # Output: 4");
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

module.exports = { add, subtract, multiply, divide, calculate };
