import analyzeArray from "../Functions/analyzeArray";

test("analyzeArray only accepts arrays of numbers", () => {
  expect(() => analyzeArray()).toThrow(Error("undefined is not a valid array"));
  expect(() => analyzeArray("some string")).toThrow(
    Error("some string is not a valid array"),
  );
  expect(() => analyzeArray({})).toThrow(
    Error("[object Object] is not a valid array"),
  );

  expect(() => analyzeArray(["e", "f"])).toThrow(
    Error("Not a valid array of numbers"),
  );

  expect(() => analyzeArray([1, "f"])).toThrow(
    Error("Not a valid array of numbers"),
  );
});

test("analyzeArray throws when array is empty", () => {
  expect(() => analyzeArray([])).toThrow(Error("Array must be non-empty"));
});

test("analyzeArray for a single element array", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
  expect(analyzeArray([3])).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
  expect(analyzeArray([399])).toEqual({
    average: 399,
    min: 399,
    max: 399,
    length: 1,
  });
});

test("analyzeArray returns object with valid average, min, max and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([12, 28, 23, 42, 22, 62])).toEqual({
    average: 31.5,
    min: 12,
    max: 62,
    length: 6,
  });
});

test("analyzeArray with different types of number", () => {
  // Positive numbers
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  // Negative numbers
  expect(analyzeArray([-1, -2, -3, -4])).toEqual({
    average: -2.5,
    min: -4,
    max: -1,
    length: 4,
  });

  // Mixed signs
  expect(analyzeArray([-10, 0, 9, 1])).toEqual({
    average: 0,
    min: -10,
    max: 9,
    length: 4,
  });

  // Floating point numbers
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});
