const lefToRightDiagonal = (arr) => {
  const array = [];
  let lefToRight = 0;
  const n = Math.sqrt(arr.length);

  for (let i = 0; i < arr.length; i = i + n + 1) {
    array.push(arr[i]);
    lefToRight += arr[i];
  }

  return lefToRight;
};

const rightToLeftDiagonal = (arr) => {
  const array2 = [];
  let rightToLeft = 0;
  const n = Math.sqrt(arr.length);

  for (let i = n - 1; i < arr.length - 1; i = i + n - 1) {
    array2.push(arr[i]);
    rightToLeft += arr[i];
  }

  return rightToLeft;
};

function diagonalDifference(arr) {
  // Write your code here
  let leftSum = lefToRightDiagonal(arr);
  let rightSum = rightToLeftDiagonal(arr);

  if (leftSum > rightSum) {
    return leftSum - rightSum;
  } else {
    return rightSum - leftSum;
  }
}

module.exports = diagonalDifference;