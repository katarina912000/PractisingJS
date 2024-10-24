//odvojiti fju za palindrom
//treba da iz broja jednog splitujem to da ih posmatram kao niz karaktera, obrnem astring i povezem

let palindrome = (n) => {
  let reversedStr = n.toString().split("").reverse().join("");
  if (reversedStr == n.toString()) {
    return true;
  } else {
    return false;
  }
};

//console.log(palindrome(123320));
//fju napravi za proizvod krenuti od 999
let maxPal = 0;
let fja = () => {
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      let product = i * j;
      if (palindrome(product) && product > maxPal) {
        maxPal = product;
      }
    }
  }
  return maxPal;
};
fja();
console.log(maxPal);
//
