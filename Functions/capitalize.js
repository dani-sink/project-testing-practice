const capitalize = function (str) {
  if (typeof str !== "string") throw new Error("Invalid string");
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalize;
