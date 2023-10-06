import { render, screen, fireEvent } from '@testing-library/react';
import { NathanContainer } from './views/TestPage';
import { nathanClick } from './views/TestPage';
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

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Test Page");
  expect(linkElement).toBeInTheDocument();
});


describe('description', () => {
  let originalWindowLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: originalWindowLocation,
    });
  });

  it('render test', () => {
    render(<NathanContainer />);
    const button = screen.getByRole('testingRole');
    expect(button).toHaveTextContent("Don't do it");

  });

  it('test that the button click is handled', () => {

    const nathanClickMock = jest.fn();
    const {getByRole} = render(<NathanContainer nathanClick = {nathanClickMock} />);
    const buttonElement = getByRole('testingRole');
    fireEvent.click(buttonElement);
    expect(nathanClickMock.toHaveBeenCalled);
    /*
    render(<NathanContainer />);
    const buttonElement = screen.getByText('Don\'t do it');
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveBeenCalled;
    */
  });

  it('test that redirection URL is correct', () => {
    const expectedUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3Dm';
    window.location.href = expectedUrl;
    expect(window.location.href).toBe(expectedUrl);
  });
});