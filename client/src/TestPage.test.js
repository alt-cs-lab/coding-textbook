import { render, screen } from '@testing-library/react';
import {GibsonComponent} from "./views/TestPage.jsx";

test('renders learn react link', () => {
  render(<GibsonComponent />);
  const linkElement = screen.getByText("Reading 1");
  expect(linkElement).toBeInTheDocument();
});
