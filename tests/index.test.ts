const { sumTwo: SumTwo } = require('../src/index');

describe('it sums two numbers', () => {
  it('must return the sum of the numbers', () => {
    const result = SumTwo(1, 2);
  
    expect(result).toEqual(3);
  });
});
