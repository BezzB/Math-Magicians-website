import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../Home/Home';

describe('Home', () => {
  it('Should display welcome page', () => {
    const { getByText } = render(<Home />);
    const p = document.querySelector('p');
    expect(getByText('Welcome Home!')).toBeInTheDocument();
    expect(p.textContent).not.toBe('');
  });
});
