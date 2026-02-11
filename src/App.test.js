import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Scene3D', () => function MockScene3D() {
  return <div data-testid="scene3d" />;
});

test('renders planner form fields', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /ai trip planner/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /generate itinerary/i })).toBeInTheDocument();
});
