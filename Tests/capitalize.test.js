import capitalize from "../Functions/capitalize";

test("capitalize with a one-character string", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalize with another one-character string", () => {
  expect(capitalize("b")).toBe("B");
  expect(capitalize("c")).toBe("C");
  expect(capitalize("d")).toBe("D");
  expect(capitalize("e")).toBe("E");
});

test("capitalize with the empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize with more than one character string", () => {
  expect(capitalize("ab")).toBe("Ab");
  expect(capitalize("ba")).toBe("Ba");
  expect(capitalize("aab")).toBe("Aab");
  expect(capitalize("baab")).toBe("Baab");
});

test("capitalize with non-alphabetic first character in the string", () => {
  expect(capitalize("9ab")).toBe("9ab");
  expect(capitalize("$ab")).toBe("$ab");
  expect(capitalize("#ab")).toBe("#ab");
  expect(capitalize("&ab")).toBe("&ab");
  expect(capitalize("!ab")).toBe("!ab");
});

test("capitalize with all uppercase input", () => {
  expect(capitalize("HELLO")).toBe("Hello");
  expect(capitalize("APPLE")).toBe("Apple");
  expect(capitalize("RIVER")).toBe("River");
});

test("capitalize with mixed string", () => {
  expect(capitalize("heLlOwOrlD")).toBe("Helloworld");
});

test("capitalize with already capitalized string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("capitalize with whitespace character only", () => {
  expect(capitalize(" ")).toBe(" ");
  expect(capitalize("   ")).toBe("   ");
  expect(capitalize("\n")).toBe("\n");
  expect(capitalize("\t")).toBe("\t");
});

test("capitalize with starting space", () => {
  expect(" hello").toBe(" hello");
});

test("capitalize with multiple words", () => {
  expect(capitalize("hello wonderful world")).toBe("Hello wonderful world");
  expect(capitalize("hello WONDERFUL world")).toBe("Hello wonderful world");
});

test("capitalize only accepts strings", () => {
  expect(() => capitalize()).toThrow(Error("Invalid string"));
  expect(() => capitalize(1)).toThrow(Error("Invalid string"));
  expect(() => capitalize(null)).toThrow(Error("Invalid string"));
});
