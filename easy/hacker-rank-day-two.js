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

// counting sort

function countingSort(arr) {
  let arr3 = arr.sort();

  let maxEl = arr3[arr3.length - 1];
  let arr2 = [];

  arr2.length = maxEl + 1;
  //arr2.map((num)=>num=0);
  arr2.fill(0, 0, arr2.length);
  for (let i = 0; i < arr3.length; i++) {
    //m = arr3[i];

    arr2[arr3[i]] += 1;

    //console.log(m);
    //arr2[m] = ++arr2[m];
  }
  console.log(arr2);
  // console.log(arr2);
}
arr = [1, 1, 3, 2, 1];
countingSort(arr);

//diagonal sum matrix
function maxDiagonalMatrix(matrix) {
  const n = matrix.length;
  let allElements = [];

  // Prikupi sve elemente iz matrice u jedan niz
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      allElements.push({ value: matrix[i][j], row: i, col: j });
    }
  }

  // Sortiraj elemente opadajuće prema vrednosti
  allElements.sort((a, b) => b.value - a.value);

  // Uzmi n najvećih elemenata i njihove pozicije
  const maxElements = allElements.slice(0, n);

  // Kreiraj novu matricu kao kopiju originalne
  let resultMatrix = matrix.map((row) => [...row]);

  // Postavi najveće elemente na dijagonalu zamenom redova i kolona
  for (let i = 0; i < n; i++) {
    const { value, row: maxRow, col: maxCol } = maxElements[i];

    // Zameni red i kolonu tako da element dođe na [i][i] poziciju
    if (maxRow !== i) {
      [resultMatrix[i], resultMatrix[maxRow]] = [
        resultMatrix[maxRow],
        resultMatrix[i],
      ];
    }
    if (maxCol !== i) {
      for (let j = 0; j < n; j++) {
        [resultMatrix[j][i], resultMatrix[j][maxCol]] = [
          resultMatrix[j][maxCol],
          resultMatrix[j][i],
        ];
      }
    }
  }

  // Izračunaj sumu dijagonale
  let diagonalSum = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum += resultMatrix[i][i];
  }

  return { resultMatrix, diagonalSum };
}

// Test primer
let matrix = [
  [2, 7, 3],
  [9, 1, 4],
  [6, 5, 8],
];

const { resultMatrix, diagonalSum } = maxDiagonalMatrix(matrix);

function f(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      arr.push({ value: matrix[i][j], col: i, row: j });
    }
  }
  let a2 = arr.sort((a, b) => b.value - a.value);
  let maxEl = a2.slice(0, matrix.length);
  //let sum = maxEl.reduce((num, sum) => (sum += num.value));
  let sum = 0;
  for (let i = 0; i < maxEl.length; i++) {
    sum += maxEl[i].value;
  }
  console.log(maxEl);
  console.log(sum);
}
let matr = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
f(matr);
// Write your code here
