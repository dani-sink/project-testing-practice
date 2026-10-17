import reverseString from "../Functions/reverseString";

test("reverseString one one character", () => {
  expect(reverseString("A")).toBe("A");
  expect(reverseString("B")).toBe("B");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("b")).toBe("b");
});

test("reverseString on empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverseString with multi-character strings", () => {
  expect(reverseString("ab")).toBe("ba");
  expect(reverseString("abc")).toBe("cba");
  expect(reverseString("abcd")).toBe("dcba");
  expect(reverseString("ABCD")).toBe("DCBA");
  expect(reverseString("aBcD")).toBe("DcBa");
});

test("reverseString on palindrome is the same as as before", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("reverseString with trailing spaces", () => {
  expect(reverseString("  abc  ")).toBe("  cba  ");
  expect(reverseString("abc  ")).toBe("  cba");
  expect(reverseString("  abc")).toBe("cba  ");
});

test("reversalString called two times returns the original string", () => {
  const original = "abc";
  const afterFirstReversal = reverseString(original);
  expect(afterFirstReversal).toBe("cba");
  const afterSecondReversal = reverseString(afterFirstReversal);
  expect(afterSecondReversal).toBe(original);
});

test("reversalString called an even number of times returns the original string", () => {
  const original = "abc";
  [2, 4, 6, 8, 10].forEach((n) => {
    let curStr = original;
    for (let i = 0; i < n; ++i) {
      curStr = reverseString(curStr);
    }
    expect(curStr).toBe(original);
  });
});

test("reversalString called an odd number of times returns the reversed string", () => {
  const original = "abc";
  const reversed = "cba";
  [1, 3, 5, 7, 9].forEach((n) => {
    let curStr = original;
    for (let i = 0; i < n; ++i) {
      curStr = reverseString(curStr);
    }
    expect(curStr).toBe(reversed);
  });
});

test("reverseString only accepts strings", () => {
  expect(() => reverseString()).toThrow(Error("Invalid string"));
  expect(() => reverseString(1)).toThrow(Error("Invalid string"));
  expect(() => reverseString(null)).toThrow(Error("Invalid string"));
});
