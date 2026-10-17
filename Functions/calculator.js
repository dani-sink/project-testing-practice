class Calculator {
  add(a, b) {
    if (typeof a === "string") a = Number(a);
    if (typeof b === "string") b = Number(b);
    if (typeof a !== "number") throw new Error(`${a} is not a valid number`);
    if (typeof b !== "number") throw new Error(`${b} is not a valid number`);
    return a + b;
  }
  subtract(a, b) {
    if (typeof a === "string") a = Number(a);
    if (typeof b === "string") b = Number(b);
    if (typeof a !== "number") throw new Error(`${a} is not a valid number`);
    if (typeof b !== "number") throw new Error(`${b} is not a valid number`);
    return a - b;
  }
  divide(a, b) {
    if (typeof a === "string") a = Number(a);
    if (typeof b === "string") b = Number(b);
    if (typeof a !== "number") throw new Error(`${a} is not a valid number`);
    if (typeof b !== "number") throw new Error(`${b} is not a valid number`);
    if (b === 0) throw new Error("You cannot divide by zero!");
    return a / b;
  }
  multiply(a, b) {
    if (typeof a === "string") a = Number(a);
    if (typeof b === "string") b = Number(b);
    if (typeof a !== "number") throw new Error(`${a} is not a valid number`);
    if (typeof b !== "number") throw new Error(`${b} is not a valid number`);
    return a * b;
  }
}

export default Calculator;
