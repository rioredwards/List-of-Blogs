import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('fetches the list of blogs', async () => {
  render(<App />);
  const blog = await screen.findByText(/Maximize Integrated Networks/i);
  expect(blog).toBeInTheDocument();
});
