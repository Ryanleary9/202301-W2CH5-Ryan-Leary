import { arrayCreator, fillGrid } from './functions.js';

describe('arrayCreator', () => {
  test('Creates a 2D array with the specified number of colums and rows', () => {
    const colum = 3;
    const row = 4;
    const result = arrayCreator(colum, row);
    expect(result.length).toEqual(colum);
    for (let i = 0; i < result.length; i++) {
      expect(result[i].length).toEqual(row);
    }
  });
});

describe('Given fillGrid function', () => {
  test('Generates a 2D array with random 0 or 1 values', () => {
    let colum = 5;
    let row = 5;
    let grid = [];
    fillGrid(colum, row, arrayCreator());
    arrayCreator();
    for (let i = 0; i < grid.length; i++) {
      for (let y = 0; y < grid[i].length; y++) {
        expect(grid[i][y]).toBe(0).or.toBe(1);
      }
    }
  });
  test('When given no amount of colums and rows should give undefined', () => {
    let colum = 0;
    let row = 0;
    let grid = [];
    fillGrid(colum, row, arrayCreator());
    arrayCreator();
    for (let i = 0; i < grid.length; i++) {
      for (let y = 0; y < grid[i].length; y++) {
        expect(grid[i][y]).toBe(undefined);
      }
    }
  });
});
