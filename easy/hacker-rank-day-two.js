//DAY TWO
//lonely integer

function lonelyinteger(a) {
  // Write your code here
  let elem = 0;
  let arr1 = a.sort();
  if (a.length > 1) {
    for (let i = 1; i < a.length; i++) {
      if (arr1[i] !== arr1[i - 1] && arr1[i] !== arr1[i + 1]) {
        elem = arr1[i];
        console.log(elem);
        return elem;
      } else {
        continue;
      }
    }

    return elem;
  } else {
    return a;
  }
}

//console.log(findIt);

////////// diagonal sum
function diagonalDifference(arr) {
  // Write your code here
  //prva silazna dijagonala

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
  }
  //console.log(sum1);
  //druga uzlazna dijagonala
  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(sum1 - sum2);
}
