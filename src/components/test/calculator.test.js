import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculator from '../Caclulator';

describe('test Calculator', () => {
  it('Should render correctly', () => {
    const { getByDisplayValue } = render(<Calculator />);
    expect(getByDisplayValue('AC')).toBeInTheDocument();
    expect(getByDisplayValue('+/-')).toBeInTheDocument();
    expect(getByDisplayValue('%')).toBeInTheDocument();
    expect(getByDisplayValue('÷')).toBeInTheDocument();
    expect(getByDisplayValue('x')).toBeInTheDocument();
    expect(getByDisplayValue('-')).toBeInTheDocument();
    expect(getByDisplayValue('+')).toBeInTheDocument();
    expect(getByDisplayValue('.')).toBeInTheDocument();
    expect(getByDisplayValue('=')).toBeInTheDocument();
  });
});
