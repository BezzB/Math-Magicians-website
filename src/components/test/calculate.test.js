import calculate from '../logic/calculate';

describe('test calculation', () => {
  // Test AC button
  it('should return null object total, next, and operation when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  // Test addition
  it('Should return 10', () => {
    const sampleInputData = {
      total: '5',
      next: '5',
      operation: '+',
    };

    const expectedOutput = {
      total: '10',
      next: null,
      operation: null,
    };
    expect(calculate(sampleInputData, '=')).toEqual(expectedOutput);
  });

  // Test subtraction
  it('Should return 10', () => {
    const sampleInputData = {
      total: '13',
      next: '3',
      operation: '-',
    };

    const expectedOutput = {
      total: '10',
      next: null,
      operation: null,
    };
    expect(calculate(sampleInputData, '=')).toEqual(expectedOutput);
  });

  // Test division
  it('Should return 10', () => {
    const sampleInputData = {
      total: '50',
      next: '5',
      operation: '÷',
    };

    const expectedOutput = {
      total: '10',
      next: null,
      operation: null,
    };
    expect(calculate(sampleInputData, '=')).toEqual(expectedOutput);
  });

  // Test multiplication
  it('Should return 25', () => {
    const sampleInputData = {
      total: '5',
      next: '5',
      operation: 'x',
    };

    const expectedOutput = {
      total: '25',
      next: null,
      operation: null,
    };
    expect(calculate(sampleInputData, '=')).toEqual(expectedOutput);
  });

  // Test modulo
  it('Should return 0', () => {
    const sampleInputData = {
      total: '10',
      next: '5',
      operation: '%',
    };

    const expectedOutput = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(sampleInputData, '=')).toEqual(expectedOutput);
  });
});
