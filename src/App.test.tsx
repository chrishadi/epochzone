import { render, screen } from '@testing-library/react';
import App from './App';

test('renders milliseconds from epoch', () => {
  render(<App />);
  const epochSecondElement = screen.getByText(/milliseconds:/i);
  expect(epochSecondElement).toBeInTheDocument();
});
