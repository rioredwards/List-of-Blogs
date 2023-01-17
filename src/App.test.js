import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('fetches the list of blogs', async () => {
  render(<App />);
  const blog = await screen.findByText(/Maximize Distributed Users/i);
  expect(blog).toBeInTheDocument();
});
