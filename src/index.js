module.exports = function solveSudoku(matrix) {
  let solve;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!matrix[i][j]) {
        for (let k = 1; k <= 9; k++) {
          if (!include(matrix, j, i, k)) {
            matrix[i][j] = k;
            solve = solveSudoku(matrix);
            if (solve) {
              return matrix;
            }
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;

  function include(matrix, x, y, n) {
    let row = matrix[y].includes(n),
      column = matrix.map(i => i[x]).includes(n),
      area = [],
      initY = Math.floor(y / 3) * 3,
      initX = Math.floor(x / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[initY + i][initX + j] > 0) {
          area.push(matrix[initY + i][initX + j]);
        }
      }
    }

    return row || column || area.includes(n) ? true : false;
  }
};
