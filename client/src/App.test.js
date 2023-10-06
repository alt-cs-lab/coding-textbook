import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ButtonTest from './views/TestPage';

const buttontypes = ['one', 'two', 'three'];

test('ButtonTest component renders and toggles buttons correctly', () => {
  const { getByText } = render(<ButtonTest buttontypes={buttontypes} />);
  
  // sets first button active
  const activeButton1 = getByText('one');
  expect(activeButton1).toHaveStyle('opacity: 1');
  // tests second button is initially inactive
  const inactiveButton2 = getByText('two');
  expect(inactiveButton2).toHaveStyle('opacity: 0.6');

  // clicks second button
  fireEvent.click(inactiveButton2);

  // tests when the second button is clicked
  expect(activeButton1).toHaveStyle('opacity: 0.6');
  expect(inactiveButton2).toHaveStyle('opacity: 1');
});
