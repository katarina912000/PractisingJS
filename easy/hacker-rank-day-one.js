//timeConvert
function timeConversion(s) {
  // 12:01:00
  //if is AM 00:01:00
  //separatisem, pogledam pretposlednje slovo, ako je A i ako je P
  //ako je P samo prepisem to bez poslednja dva
  //ako je A napravim ne caseove nego

  let d1 = [...s];
  let pOrA = d1[d1.length - 2];
  let hours = `${d1[0]}${d1[1]}`;
  let dfinal = [];

  if (pOrA === "P") {
    if (hours === "12") {
      hours = "12";
    } else {
      hours = `${Number(hours) + 12}`;
    }
    dfinal.push(hours);
    for (let j = 2; j < d1.length - 2; j++) {
      dfinal.push(d1[j]);
    }
  } else {
    if (hours === "12") {
      hours = "00";
    }

    dfinal.push(hours);

    for (let i = 2; i < d1.length - 2; i++) {
      dfinal.push(d1[i]);
    }
  }

  return dfinal.join("");
}

//ALGORITHMs
//findMax 4 and findmin 4
//console.log(arr.sort().pop());

let arr2 = [1, 5, 5, 5, 5];
//console.log(arr2.length.toFixed(6)); //fixed length of decimal nums
let arr4 = arr2.sort();

let arr3 = [];
let arr5 = [];
for (let i = 0; i < 4; i++) {
  arr3.push(arr4[i]);
}
for (let i = arr4.length - 4; i < arr4.length; i++) {
  arr5.push(arr4[i]);
}
//console.log(arr3, arr5);

//mocktest

//middle, odd elements 1-n
function middle(array) {
  let midd = array.length / 2;
}
let array = [0, 1, 2, 3, 4, 5, 6];
let midd = Math.round(array.length / 2) - 1;
let sortedArr = array.sort();
console.log(sortedArr[midd]);
