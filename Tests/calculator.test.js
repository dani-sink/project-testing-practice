import Calculator from "../Functions/calculator";

test("Calculator new instance has all its methods defined", () => {
  const calc = new Calculator();
  expect(Calculator.prototype.isPrototypeOf(calc)).toBe(true);
  expect(calc.add).toBeDefined();
  expect(calc.subtract).toBeDefined();
  expect(calc.multiply).toBeDefined();
  expect(calc.divide).toBeDefined();
});

test("add properly adds two numbers", () => {
  const calc = new Calculator();

  expect(calc.add(1, 2)).toBe(3);
  expect(calc.add(-1, 2)).toBe(1);
  expect(calc.add(2, 3)).toBe(5);
  expect(calc.add(-2, -3)).toBe(-5);
  expect(calc.add(5, 0)).toBe(5);
  expect(calc.add(-5, 0)).toBe(-5);
  expect(calc.add(Number.MAX_SAFE_INTEGER, 2));
});

test("add with floats", () => {
  const calc = new Calculator();

  expect(calc.add(1.1, 1)).toBeCloseTo(2.1);
  expect(calc.add(-1.1, 1)).toBeCloseTo(-0.1);
  expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("add properly adds numeric strings", () => {
  const calc = new Calculator();

  expect(calc.add("1", "2")).toBe(3);
  expect(calc.add("-1", "2")).toBe(1);
  expect(calc.add("-1", "-2")).toBe(-3);
});

test("add properly throws error", () => {
  const calc = new Calculator();
  expect(() => calc.add()).toThrow(Error("undefined is not a valid number"));
  expect(() => calc.add(null, null)).toThrow(
    Error("null is not a valid number"),
  );
  expect(() => calc.add(1)).toThrow(Error("undefined is not a valid number"));
  expect(() => calc.add(null, 2)).toThrow(Error("null is not a valid number"));
});

test("subtract properly subtracts two numbers", () => {
  const calc = new Calculator();
  expect(calc.subtract(1, 2)).toBe(-1);
  expect(calc.subtract(-1, 2)).toBe(-3);
  expect(calc.subtract(2, 3)).toBe(-1);
  expect(calc.subtract(-2, -3)).toBe(1);
  expect(calc.subtract(5, 0)).toBe(5);
  expect(calc.subtract(-5, 0)).toBe(-5);
  expect(calc.subtract(Number.MIN_SAFE_INTEGER, 2));
});

test("subtract properly subtracts numeric strings", () => {
  const calc = new Calculator();

  expect(calc.subtract("1", "2")).toBe(-1);
  expect(calc.subtract("-1", "2")).toBe(-3);
  expect(calc.subtract("-1", "-2")).toBe(1);
});

test("subtract properly throws error", () => {
  const calc = new Calculator();
  expect(() => calc.subtract()).toThrow(
    Error("undefined is not a valid number"),
  );
  expect(() => calc.subtract(null, null)).toThrow(
    Error("null is not a valid number"),
  );
  expect(() => calc.subtract(1)).toThrow(
    Error("undefined is not a valid number"),
  );
  expect(() => calc.subtract(null, 2)).toThrow(
    Error("null is not a valid number"),
  );
});

test("divide properly divides two numbers", () => {
  const calc = new Calculator();
  expect(calc.divide(4, 2)).toBe(2);
  expect(calc.divide(64, 32)).toBe(2);
  expect(calc.divide(1, 2)).toBe(0.5);
  expect(calc.divide(-4, 2)).toBe(-2);
  expect(calc.divide(-4, -2)).toBe(2);
  expect(calc.divide(4, -2)).toBe(-2);
  expect(calc.divide(0, 4)).toBe(0);
});

test("divide properly divides numeric strings", () => {
  const calc = new Calculator();

  expect(calc.divide("12", "2")).toBe(6);
  expect(calc.divide("-1", "2")).toBe(-0.5);
  expect(calc.divide("-1", "-2")).toBe(0.5);
});

test("divide properly throws error when dividing by zero", function () {
  const calc = new Calculator();

  expect(() => calc.divide(4, 0)).toThrow(Error("You cannot divide by zero!"));
});

test("divide properly throws error", () => {
  const calc = new Calculator();
  expect(() => calc.divide()).toThrow(Error("undefined is not a valid number"));
  expect(() => calc.divide(null, null)).toThrow(
    Error("null is not a valid number"),
  );
  expect(() => calc.divide(1)).toThrow(
    Error("undefined is not a valid number"),
  );
  expect(() => calc.divide(null, 2)).toThrow(
    Error("null is not a valid number"),
  );
});

test("multiply properly multiplies two numbers", () => {
  const calc = new Calculator();
  expect(calc.multiply(4, 2)).toBe(8);
  expect(calc.multiply(64, 32)).toBe(2048);
  expect(calc.multiply(1, 2)).toBe(2);
  expect(calc.multiply(-4, 2)).toBe(-8);
  expect(calc.multiply(-4, -2)).toBe(8);
  expect(calc.multiply(1, 0)).toBe(0);
  expect(calc.multiply(-4, 0)).toBe(0);
});

test("multiply properly multiplies numeric strings", () => {
  const calc = new Calculator();

  expect(calc.multiply("12", "2")).toBe(24);
  expect(calc.multiply("-1", "2")).toBe(-2);
  expect(calc.multiply("-1", "-2")).toBe(2);
});

test("multiply properly throws error", () => {
  const calc = new Calculator();
  expect(() => calc.multiply()).toThrow(
    Error("undefined is not a valid number"),
  );
  expect(() => calc.multiply(null, null)).toThrow(
    Error("null is not a valid number"),
  );
  expect(() => calc.multiply(1)).toThrow(
    Error("undefined is not a valid number"),
  );
  expect(() => calc.multiply(null, 2)).toThrow(
    Error("null is not a valid number"),
  );
});
