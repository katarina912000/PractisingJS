// ascii code, shifting, ceaserCipher
function caesarCipher(s, k) {
  // Write your code here

  //description:

  //k is rotation factor, s is input string
  //each letter has ascii num.

  //Logic:
  //separate the string, watch just one letter at the time
  //loop where we will check if that symbol is in my edge case in ascii
  //if true:than we will shift it with k number of shift
  //if not true: just rewrite it in that new string

  let arr2,
    arr = "";
  let arr3 = [];
  let k1;
  let currentLetterAscii;
  if (k > 26) {
    k1 = k % 26;
  } else {
    k1 = k;
  }

  for (let i = 0; i < s.length; i++) {
    currentLetterAscii = s[i].charCodeAt(0);
    if (s[i].charCodeAt(0) > 64 && s[i].charCodeAt(0) < 91) {
      arr2 = s[i].charCodeAt(0) + k1;
      if (arr2 > 90) {
        arr2 = s[i].charCodeAt(0) - (26 - k1);
      }
      arr = String.fromCharCode(arr2);
      arr3.push(arr);
    } else if (s[i].charCodeAt(0) > 96 && s[i].charCodeAt(0) < 123) {
      arr2 = s[i].charCodeAt(0) + k1;
      if (arr2 > 122) {
        arr2 = s[i].charCodeAt(0) - (26 - k1);
      }
      arr = String.fromCharCode(arr2);
      arr3.push(arr);
    } else {
      arr3.push(s[i]);
    }
  }

  return arr3.join("");
}

//mock test
//checking if that is palindrome
function isPalindrome(s) {
  //check if s.length is even

  //    abbac
  //     ^
  //      ^

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function palindromeRemove(s) {
  let newString;
  if (isPalindrome(s)) {
    console.log("-1");
    return -1;
  } else {
    for (let m = 0; m < s.length; m++) {
      newString = s.replace(s[m], "");

      if (isPalindrome(newString)) {
        console.log(m);

        return m;
      }
      newString = s;
    }
  }
}

palindromeRemove("abaa");
