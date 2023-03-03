var Test = require("./test/Test.js");

/**
 * Fonction permettant de déterminer si la chaine passée en paramètre est un palindrome
 * @param pString
 * @return boolean
 */
function isPalindrome(pString) {
  const reverse = pString.split("").reverse().join("");

  if (reverse === pString) return true;
  else return false;
}

Test.assert("isPalindrome 1", true, isPalindrome("rever"));
Test.assert("isPalindrome 2", false, isPalindrome("palindrome"));
Test.assert("isPalindrome 3", true, isPalindrome("ressasser"));
