import { pedro } from './functions.js';

describe('Given test function', () => {
  test('Sould give 1 + 1 = 2', () => {
    const a = 1;
    const b = 1;
    const r = pedro(a, b);
    const expected = 2;
    expect(r).toBe(expected);
  });
});
