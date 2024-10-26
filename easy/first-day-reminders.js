// I day - types of var, types, functions types, controls structures, algorithms - sort, array manipulation(palindrome, factoriel)

//objects definition
var obj = {
  name: "Kathie",
  lastName: "Ooou",
  age: "22",
};

//console.log(obj.age);

//var vs let
var adult = true;
if (adult) {
  let a = 0;
  var b = 2;
}
console.log(b);

// classes
class Page {
  constructor() {
    this.pages = [];
  }

  addPage(text) {
    var page = new Page(text);
    this.pages.push(page);
  }
}

//separate string
var hello = "Hello";
var sepH = [...hello];

console.log(sepH);

var arr = [1, 2, 3];
for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}]:${val}`);
}

function greet(msg) {
  return function who(name) {
    console.log(`${msg},${name}`);
  };
}
var hello = greet("hello");
var kyle = greet("Kyle");
hello("Kyl");
// array methods,
arr = [1, 2, 3, 2];

//OSNOVNE
//push, dodaje na kraj element
//pop, uklanja poslednji element iz niza
//unshift, dodaje na pocetak niza elem
//shift, uklanja prvi element

//ADVANCED - za modifikaciju i kopiranje

//splice, uklanja/dodaje/menja element na osnovu prosledjenog indeksa

//arr.splice(0, 5, 8);
//console.log(arr);

//slice, pravi novi niz od vec postojeceg, podskup
arr.slice(1, 3);
console.log(arr); //ovde ce ostati isti niz jer slice ne menja niz
console.log(arr.slice(1, 3));

//ADVANCED - za prolazak kroz niz i transformacije
//foreach
arr.forEach((num) => console.log("broj je:" + num));

//map, kreira novi niz transformisanih elemenata
console.log(arr.map((num) => num * 3));

//ADVANCED - filtriranje i pretraga
//filter, vratice niz elem koji ispune taj uslov
console.log(arr.filter((num) => num > 2));

//find, pronadje prvi elem koji ispuni uslov
console.log(arr.find((num) => num.toString().startsWith("1")));
//findIndex, vraca indeks od provg elem koji zadvoolja uslov
console.log(arr.findIndex((num) => num.toString().startsWith("1")));

//ADVANCED - provera i provera uslova
//some, da li iko od elem ispunjava uslov, true/false
console.log(arr.some((num) => num.toString().startsWith("1")));
//every, da li svaki ispunjava uslov
console.log(arr.every((num) => num.toString().startsWith("1")));

//ADVANCED - reedukcija
//reduce , agregira niz u 1 vrednost
console.log(arr.reduce((sum, numCurr) => (sum += numCurr)));

//ADVANCED - pristupanje, pretraga,poredjenje
//includes, proveri da li ima, true/f
//indexOf, vrati prvi indeks elem u nizu
//lastIndexOf, vrati posl ind elem u nizu

//ADVANCED - prikaz i transf u string
//join, spaja sve elem niza u string
console.log(arr.join(","));

//toString

//ADVANCED - sortiranje i obrtanje
//sort, po def rastuce, i promeni ga zauvek
console.log(arr.sort());

//reverse

console.log(arr.reverse());

//ALGORITHMs
//findMax
console.log(arr.sort().pop());
