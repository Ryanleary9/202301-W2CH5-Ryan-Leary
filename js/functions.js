export const arrayCreator = (colum, row) => {
  let arr = new Array(colum);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(row);
  }
  return arr;
};

let grid;
let colum = 5;
let row = 5;

export const fillGrid = () => {
  grid = arrayCreator(colum, row);
  for (let i = 0; i < colum; i++) {
    for (let y = 0; y < row; y++) {
      grid[i][y] = Math.floor(Math.random() * 2);
    }
  }
  displayGrid();
};

const displayGrid = () => {
  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i].join(' '));
  }
};

fillGrid();
