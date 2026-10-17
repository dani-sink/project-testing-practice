const analyzeArray = function (arr) {
  if (!Array.isArray(arr)) throw new Error(`${arr} is not a valid array`);
  if (!arr.every((ele) => typeof ele === "number"))
    throw new Error("Not a valid array of numbers");

  const length = arr.length;

  if (length === 0) throw new Error("Array must be non-empty");

  const average = arr.reduce((prev, cur) => prev + cur, 0) / length;
  const min = arr.reduce(
    (prev, cur) => (cur < prev ? cur : prev),
    Number.MAX_SAFE_INTEGER,
  );
  const max = arr.reduce(
    (prev, cur) => (cur > prev ? cur : prev),
    Number.MIN_SAFE_INTEGER,
  );

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
