import calculate from './logic/calculate';

describe('calculate', () => {
  it('should return the correct result for multiplication', () => {
    const state = {
      total: 1,
      next: 2,
      operation: '*',
    };
    const newState = calculate(state, 3);
    expect(newState.total).toBe(6);
  });
});
