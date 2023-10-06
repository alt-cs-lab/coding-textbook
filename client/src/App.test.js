import { render, screen } from '@testing-library/react';
import App from './App';
import TestPage, { calculate } from './views/TestPage';

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

describe('Test nicholas button functionality', () =>{
  it('Test click event', () => {
    const handleClick = jest.fn();

    const button = shallow((<Button onClick={handleClick}>Nicholas button</Button>));
    button.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Test calculate button functions', () =>{
  it('Test click event', () => {
    const handleCalculate = jest.fn();

    const button = shallow((<Button onClick={handleCalculate}>Calculate</Button>));
    button.find('button').simulate('click');
    expect(handleCalculate).toHaveBeenCalledTimes(1);
  });
});

describe('calculate function call returns correct', ()=>{
  it('calculate of 2 + 4 is six', ()=>{
    expect(calculate("2","+","4")).toBe(6);
  });

  it('calculate of 2 - 4 is six', ()=>{
    expect(calculate("2","-","4")).toBe(-2);
  });

  it('calculate of 2 + 4 is six', ()=>{
    expect(calculate("2","*","4")).toBe(8);
  });

  it('calculate of 2 + 4 is six', ()=>{
    expect(calculate("2","/","4")).toBe(0.5);
  });
});
