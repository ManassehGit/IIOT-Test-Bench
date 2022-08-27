import { render, screen } from '@testing-library/react';
import App from './App';

test('Show the introductory IIOT Test Bench header', () => {
  render(<App />);
  const linkElement = screen.getByText(/IIOT Test Bench/i);
  expect(linkElement).toBeInTheDocument();
});
