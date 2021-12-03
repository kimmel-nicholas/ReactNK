import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('Cards Loads', () => {
    render(<Cards />);
    const linkElement1 = screen.getByText(/Click to see a number/i);
    expect(linkElement1).toBeInTheDocument();
    const linkElement2 = screen.getByText(/No, click here to see a number/i);
    expect(linkElement2).toBeInTheDocument();
    const linkElement3 = screen.getByText(/Wait, click here to see a number/i);
    expect(linkElement3).toBeInTheDocument();
    const linkElement4 = screen.getByText(/Just click here already/i);
    expect(linkElement4).toBeInTheDocument();
    const linkElement5 = screen.getByText(/I don't want to be clicked/i);
    expect(linkElement5).toBeInTheDocument();
    const linkElement6 = screen.getByText(/I'm just happy to be here/i);
    expect(linkElement6).toBeInTheDocument();
});


test('Card Loads Fade 1', () =>{
    render(<Cards fade1 = {true} />);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads Fade 2', () =>{
    render(<Cards fade2 = {true} />);
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads Fade 3', () =>{
    render(<Cards fade3 = {true} />);
    const linkElement = screen.getByText(/3/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads Fade 4', () =>{
    render(<Cards fade4 = {true} />);
    const linkElement = screen.getByText(/4/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads Fade 5', () =>{
    render(<Cards fade5 = {true} />);
    const linkElement = screen.getByText(/5/i);
    expect(linkElement).toBeInTheDocument();
});

test('Card Loads Fade 6', () =>{
    render(<Cards fade6 = {true} />);
    const linkElement = screen.getByText(/6/i);
    expect(linkElement).toBeInTheDocument();
});

