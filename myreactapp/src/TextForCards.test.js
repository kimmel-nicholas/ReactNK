import { render, screen } from '@testing-library/react';
import TextForCards from './TextForCards';

test('Number Prompt Loads', () => {
  render(<TextForCards />);
  const linkElement = screen.getByText(/Check out this number:/i);
  expect(linkElement).toBeInTheDocument();
});

test('Number 1 Loads', () =>{
    render(<TextForCards cardNum = {1} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
});

test('Number 2 Loads', () =>{
    render(<TextForCards cardNum = {2} />);
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument();
});

test('Number 3 Loads', () =>{
    render(<TextForCards cardNum = {3} />);
    const linkElement = screen.getByText(/3/i);
    expect(linkElement).toBeInTheDocument();
});

test('Number 4 Loads', () =>{
    render(<TextForCards cardNum = {4} />);
    const linkElement = screen.getByText(/4/i);
    expect(linkElement).toBeInTheDocument();
});

test('Number 5 Loads', () =>{
    render(<TextForCards cardNum = {5} />);
    const linkElement = screen.getByText(/5/i);
    expect(linkElement).toBeInTheDocument();
});

test('Number 6 Loads', () =>{
    render(<TextForCards cardNum = {6} />);
    const linkElement = screen.getByText(/6/i);
    expect(linkElement).toBeInTheDocument();
});