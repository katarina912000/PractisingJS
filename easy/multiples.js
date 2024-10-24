// zbir svih  brojeva iz niza prirodnih brojeva do 1000 koji su deljivi sa 3 ili 5

let niz = [];
//ovo je moglo kroz filter
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    niz.push(i);
  }
}

// ovo je moglo na ovaj nacin
// let sum = filteredArray.reduce((acc, curr) => acc + curr, 0);

let suma = 0;
for (let i = 0; i < niz.length; i += 2) {
  suma += niz[i] + niz[i + 1];
}
console.log(suma);
