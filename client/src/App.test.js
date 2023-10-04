import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('text is rendered', () => {
  expect(screen.getByText('There is no way a bee should be able to fly.')).toBeInTheDocument()
  expect(screen.getByText('Its wings are too small to get its fat little body off the ground.')).toBeInTheDocument()
  expect(screen.getByText('The bee, of course, flies anyway')).toBeInTheDocument()
  expect(screen.getByText('because bees')).toBeInTheDocument()
  expect(screen.getByText('Impossible')).toBeInTheDocument()
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://en.wikipedia.org/wiki/Train">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
