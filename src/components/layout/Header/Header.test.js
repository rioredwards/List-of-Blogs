import { render, screen } from '@testing-library/react';
import Header from './Header';

test('<Header /> renders the title', () => {
  render(<Header />);
  const headerText = screen.getByText('Alchemedium');
  expect(headerText).toBeVisible();
});
