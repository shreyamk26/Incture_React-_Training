import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hello text', () => {
  render(<App />);
  
  
  const textElement = screen.getByText(/hello, testing world!/i);
  
  expect(textElement).toBeInTheDocument();
});
