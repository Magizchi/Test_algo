var Test = require("./test/Test.js");

/**
 * Fonction permettant d'inverser une chaîne de caractère
 * @param pString
 * @return string
 */
function reverseString(pString) {
  return pString.split("").reverse().join("");
}

Test.assert("reverseString 1", "essuomelepmaP", reverseString("Pampelemousse"));
Test.assert("reverseString 2", "0987654321", reverseString("1234567890"));
Test.assert(
  "reverseString 3",
  "looc tse'c tpircsavaJ",
  reverseString("Javascript c'est cool")
);
