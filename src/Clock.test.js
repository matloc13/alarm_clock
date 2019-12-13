import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock';

test('renders learn react link', () => {
  const { getByText } = render(<Clock />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
