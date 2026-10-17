import caesarCipher from "../Functions/caesarCipher";

test("caesarCipher properly shifts one character-string by one", () => {
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("b", 1)).toBe("c");
  expect(caesarCipher("c", 1)).toBe("d");
});

test("caesarCipher properly shifts one character-string by more than one", () => {
  expect(caesarCipher("a", 2)).toBe("c");
  expect(caesarCipher("b", 5)).toBe("g");
  expect(caesarCipher("c", 20)).toBe("w");
});

test("caesarCipher properly handles shift that wraps forwards", () => {
  expect(caesarCipher("x", 3)).toBe("a");
  expect(caesarCipher("y", 3)).toBe("b");
  expect(caesarCipher("z", 3)).toBe("c");
});

test("caesarCipher handles shift larger than 26", () => {
  expect(caesarCipher("a", 29)).toBe("d");
  expect(caesarCipher("b", 52)).toBe("b");
});

test("caesarCipher handles large negative shifts", () => {
  expect(caesarCipher("d", -29)).toBe("a");
});

test("caesarCipher properly handles shift that wraps backwards", () => {
  expect(caesarCipher("a", -3)).toBe("x");
  expect(caesarCipher("b", -3)).toBe("y");
  expect(caesarCipher("c", -3)).toBe("z");
});

test("caesarCipher also handles uppercase letters", () => {
  expect(caesarCipher("A", 1)).toBe("B");
  expect(caesarCipher("B", 1)).toBe("C");
  expect(caesarCipher("C", 1)).toBe("D");

  expect(caesarCipher("A", 2)).toBe("C");
  expect(caesarCipher("B", 5)).toBe("G");
  expect(caesarCipher("C", 20)).toBe("W");

  expect(caesarCipher("X", 3)).toBe("A");
  expect(caesarCipher("Y", 3)).toBe("B");
  expect(caesarCipher("Z", 3)).toBe("C");
});

test("caesarCipher leaves non-alphabetical characters unchanged", () => {
  expect(caesarCipher(",", 5)).toBe(",");
  expect(caesarCipher("!", 5)).toBe("!");

  // Whitespace
  expect(caesarCipher(" ", 5)).toBe(" ");
  expect(caesarCipher("\n", 5)).toBe("\n");

  // Numbers
  expect(caesarCipher("9", 5)).toBe("9");
  expect(caesarCipher("8", 5)).toBe("8");
});

test("caesarCipher handles multiple characters", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("caesarCipher returns the original string on shift factor 0", () => {
  expect(caesarCipher("Hello World", 0)).toBe("Hello World");
});

test("caesarCipher throw errors on missing or wrong values", () => {
  expect(() => caesarCipher()).toThrow(
    Error("undefined is not a valid string"),
  );
  expect(() => caesarCipher(null)).toThrow(Error("null is not a valid string"));
  expect(() => caesarCipher(1)).toThrow(Error("1 is not a valid string"));

  expect(() => caesarCipher("abc")).toThrow(
    Error("undefined is not a valid positive integer"),
  );
  expect(() => caesarCipher("abc", null)).toThrow(
    Error("null is not a valid positive integer"),
  );
  expect(() => caesarCipher("abc", "3")).toThrow(
    Error("3 is not a valid positive integer"),
  );
});
