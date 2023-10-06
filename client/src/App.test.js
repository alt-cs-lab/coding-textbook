import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TestPage, { calculate, handleCalculate, handleClick } from './views/TestPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('text is rendered', () => {
  render(<TestPage />)
  const textelement= screen.getByText(/There is no way a bee should be able to fly/);
  expect(textelement).toBeInTheDocument();

  const textelement2= screen.getByText(/Its wings are too small to get its fat little body off the ground./);
  expect(textelement2).toBeInTheDocument();

  const textelement3= screen.getByText(/The bee, of course, flies anyway/);
  expect(textelement3).toBeInTheDocument();

  const textelement4= screen.getByText(/because bees don't care what humans think is/);
  expect(textelement3).toBeInTheDocument();

  const textelement5= screen.getByText(/Impossible/);
  expect(textelement3).toBeInTheDocument();
});

describe("nicholas button functions", () =>{
  test('Test nicholas button functionality', () =>{
    render(<TestPage />);
    const nButton1 = screen.getByText('Nicholas button');
    fireEvent.click(nButton1);
    expect(nButton1.toHaveBeenCalled);

  
  });
});


describe('Test calculate button functions', () =>{
  it('Test click event', () => {
    render(<TestPage />);
    const calcButton1 = screen.getByText('Calculate');
    fireEvent.submit(calcButton1);
    expect(calcButton1.toHaveBeenCalled);
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
