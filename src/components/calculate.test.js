import calculate from './logic/calculate';

describe('calculate', () => {
  it('should return the correct result for AC', () => {
    const state = {
      total: 10,
    };
    const newState = calculate(state, 'AC');
    expect(newState.total).toBe(null);
  });
});
