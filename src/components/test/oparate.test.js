import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}

describe('test operate', () => {
  // Test addition
  it('Should return 10', () => {
    const expectedOutput = '10';
    const actualOutput = operate(5, 5, '+');
    expect(actualOutput).toEqual(expectedOutput);
  });

  // Test subtraction
  it('Should return 0', () => {
    const expectedOutput = '0';
    const actualOutput = operate(5, 5, '-');
    expect(actualOutput).toEqual(expectedOutput);
  });

  // Test multiplication
  it('Should return 25', () => {
    const expectedOutput = '25';
    const actualOutput = operate(5, 5, 'x');
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('Should return 1', () => {
    const expectedOutput = '1';
    const actualOutput = operate(5, 5, '÷');
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('Should return 0', () => {
    const expectedOutput = '0';
    const actualOutput = operate(5, 5, '%');
    expect(actualOutput).toEqual(expectedOutput);
  });
});
