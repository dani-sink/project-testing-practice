const isUpperCase = (char) => char.toUpperCase() === char;

// To always get a non-negative result regardless of
// the dividend sign, we use the technique provided at:
// https://mimo.org/glossary/javascript/modulo-operator
// on the "Ensuring a Positive Remainder" section
const mod = (n, m) => ((n % m) + m) % m;

const ALPHABETICAL_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const caesarCipher = function (str, shift) {
  if (typeof str !== "string") throw new Error(`${str} is not a valid string`);
  if (!Number.isInteger(shift))
    throw new Error(`${shift} is not a valid positive integer`);

  let cipher = "";
  for (let i = 0; i < str.length; ++i) {
    const curChar = str.charAt(i);
    if (ALPHABETICAL_CHARS.includes(curChar)) {
      const charUnicode = str.charCodeAt(i);
      let aCharCode;
      if (isUpperCase(curChar)) {
        aCharCode = "A".charCodeAt(0);
      } else {
        aCharCode = "a".charCodeAt(0);
      }

      // Using the remainder (%) character can give us a
      // negative remainder if the dividend was negative.
      //   Instead, we use our custom mod to handle such cases.
      const shiftedUnicode =
        mod(charUnicode - aCharCode + shift, 26) + aCharCode;
      const shiftedChar = String.fromCodePoint(shiftedUnicode);
      cipher += shiftedChar;
    } else {
      cipher += curChar;
    }
  }
  return cipher;
};

export default caesarCipher;
