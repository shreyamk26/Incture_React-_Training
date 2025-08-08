import userEvent from '@testing-library/user-event';
import {fireEvent, render,screen} from "@testing-library/react";

import Counter from "./Counter";

test("Counter Components Working Properly",()=>{
    render(<Counter/>)

    const buttonElement=screen.getByText(/Click Me/i);

    fireEvent.click(buttonElement);
    const updatedCount=screen.getByText(/You Clicked Button 10 Times./i)  // fail in test case than we can see this Counter Components Working Properly
    expect(updatedCount).toBeInTheDocument();
})

test("Checking button Functionality ",async()=>{
    render(<Counter/>);
    expect(screen.getByText(/Count : 0/i)).toBeInTheDocument();

    const button =screen.getByRole("button" , {name: /Click Me/i});

    await userEvent.click(button); 
    expect(screen.getByText(/Count : 1/i)).toBeInTheDocument();
})