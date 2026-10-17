const reverseString = function (str) {
  if (typeof str !== "string") throw new Error("Invalid string");
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
};

export default reverseString;
