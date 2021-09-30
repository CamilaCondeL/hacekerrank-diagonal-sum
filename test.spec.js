const diagonalDifference = require("./index");

describe ("sums both diagonals", () => {
  it("tests for square 3 matrix", () => {
    const level = diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]); 
    expect(level).toStrictEqual(15);
  });

  it("tests for square 4 matrix", () => {
    const level = diagonalDifference([1, 4, 5, 6, 7, 9, 10, 12, 15, -4, -3, 2, 8, 20, -1, 6]); 
    expect(level).toStrictEqual(7);
  });

  it("tests for square 3 matrix", () => {
    const level = diagonalDifference([10, -2, 7, 4, 1, 7, 3, 20, 2, 11, 6, 13, 5, 30, 25, -5, 3, 4, 8, 32, 4, 9, 7, 2, 15]); 
    expect(level).toStrictEqual(26);
  });

})