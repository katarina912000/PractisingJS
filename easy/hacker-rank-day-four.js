//1. superDigit

function superDigit(n, k) {
  // Write your code here

  //IDEA
  //Description:
  //n=> input number
  //k=>numbers length

  //separate each number, and then reduce it

  //edge case?

  //148
  //1+4+8=13
  //13
  //1+3
  //4
  //recursive
  let arr2 = [];
  if (n.toString().length === 1) {
    //console.log(n);
    return n;
  } else {
    let arr = [...n];

    for (let i = 0; i < arr.length; i++) {
      arr2.push(Number(arr[i]));
    }
    let newNum = arr2.reduce((sum, num) => (sum += num));

    return superDigit(newNum.toString(), newNum.toString().length);
  }
}

//2.
function gridChallenge(grid) {
  // Write your code here
  console.log(grid);
  //Description:

  //so we want to go through each string in array, and each char
  //and to compare chars with same index, but their ascii code
  //we want 2 checks, first check in row, second check in column
  //but maybe if first check won't be successfull, then there is
  //no second check

  //row check
  //['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
  //      ^

  //column check
  //['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
  //   ^
  //            ^

  //YES is just if both condition is satisfied, no i didn't get it
  //YES is if we can rearrange it to have it in ordered array

  //the logic will be:
  //check with if statement ascii code, in a loop, each string
  // if the ascii code is

  //I DONT GET IT because every string can be reordered ascending

  let j = 0;

  var isTrue = 0;

  for (let i = 0; i < grid.length; i++) {
    //grid[i]=>'eabcd'
    console.log(grid[i]);
    while (j !== grid[0].length) {
      if (grid[i].charCodeAt(j) < grid[i].charCodeAt(j + 1)) {
        isTrue + 1;
      }
      j++;
    }
    console.log("-----");
    j = 0;
    if (isTrue === grid[0].length) {
      console.log(true);
    }
  }
}
