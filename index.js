function diagonalDifference(arr) {
  // Write your code here
  const simpleArray = [];

for (let i = 0; i<arr.length; i++) {

  for(let j = 0; j<arr[i].length; j++) {
    simpleArray.push(arr[i][j]);
  }
}
 let leftSum =  lefToRightDiagonal(simpleArray);
 let rightSum = rightToLeftDiagonal(simpleArray);

 if(leftSum > rightSum) {
     return leftSum - rightSum;
 } 

 else {
     return rightSum - leftSum;

 }

}

const lefToRightDiagonal = (simpleArray) => {
     const array = [];
     let lefToRight = 0;
     const n = Math.sqrt(simpleArray.length);

      for(let i = 0; i < simpleArray.length; i = i+n+1) {
           array.push(simpleArray[i]);
           lefToRight += simpleArray[i];
      }

      return lefToRight;

}

const rightToLeftDiagonal = (simpleArray) => {
  const array2 = [];
  let rightToLeft = 0;
  const n = Math.sqrt(simpleArray.length);

  for(let i = n-1; i < simpleArray.length -1; i = i + n - 1) {
      array2.push(simpleArray[i]);
      rightToLeft += simpleArray[i];

  }

  return rightToLeft;
}


module.exports = diagonalDifference;