import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Quotes from '../Quotes';

describe('Show fetched quotes', () => {
  it('Should display loading', () => {
    const { getByText } = render(<Quotes />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
