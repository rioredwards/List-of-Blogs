import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('<Footer /> renders the Alchemy copyright', () => {
  render(<Footer />);
  const footerText = screen.getByText('Copyright Alchemy Codelab 2021-2022');
  expect(footerText).toBeVisible();
});
