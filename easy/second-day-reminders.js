// II day  - petlje kroz objekte, kljuc i value, manip doma, queryselector, getelembyid, queryselall, asinhroni JS

//OSNOVNO - kreiranja obj,pristup svojstvima
//create
var obj = {
  name: "somebody",
  lastName: "somehow",
  age: 29,
};
//read
//console.log(obj["name"] + obj.age);

//add/delete prop

obj.status = "none";
delete obj.age;

//console.log(obj); //ovo bude ispis sa {}kao niz

//metode unutar obj
obj.getInfos = function () {
  console.log(`${this.status} ${obj.lastName}`);
};
obj.getInfos();

//iteracija kroz props
console.log(".........."); //ovo bude ispis samo : i jedno ispod drugog
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// kljucevi, values
//OBJECT je kljucna rec - KEYS,VALUES,ENTRIES
let keys = Object.keys(obj);
let values = Object.values(obj);
let entries = Object.entries(obj);
//console.log(keys, values, entries);

//kopiranje objekata i spajanje
//izgleda je {} za novi objekat,prazan
let m = {};
Object.assign(m, obj); //ovo je i z asamo kopiranje i za spajanje novih prop
Object.assign(m, obj, {
  hobby: "loby",
});
//drugi nacin
let n = { ...m }; //isto i ovo za spajanje
console.log("/////////");
//console.log(n);
// ako obj ima ugnjezdene objekte unutar sebe, onda json.parse koristi za duboko kopiranje
//let me see
//ugnjezdenim obj pristupamo kao obj.anotherObj.birth, ili obj.anotherobj[birth]
obj.anotherObj = {
  feeling: "good",
  birth: new Date("2004-03-03"),
  anotherAnotherObj: { someInfo: "infos", what: "what" },
};

let k = {};
Object.assign(k, obj);
//console.log("/////////");
//console.log(k);

//provera prop, IN, hasOwnProperty
//console.log("name" in obj);//vraca bool
//console.log(obj.hasOwnProperty("name"))

//this
let user = {
  username: "john_doe",
  sayHello: function () {
    return `Hello, ${this.username}!`;
  },
};
console.log(user.sayHello()); // "Hello, john_doe!"

//convert obj in json format
console.log(JSON.stringify(user)); // ne ukljuci fju, samo podatke koje nisu fja
//console.log(JSON.parse(jsonStringic))//ovo je unazad znaci iz json u obj
