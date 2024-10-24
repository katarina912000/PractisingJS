let niz = [1];

let fibo = (n) => {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i - 1] == null) {
      niz.push(niz[i] + niz[i]);
    } else {
      niz.push(niz[i] + niz[i - 1]);
    }
    m = niz[i + 1];
    if (m > n) {
      niz.pop();
      return;
    }
  }
};
fibo(4000000);
const filteredArray = niz.filter((num) => num % 2 === 0);
let sum = filteredArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
console.log("----------");
filteredArray.forEach((element) => {
  console.log(element);
});
