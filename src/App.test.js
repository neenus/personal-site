import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    level: 2,
    name: /Neenus Gabriel/i
  });
  expect(heading).toBeInTheDocument();
});
