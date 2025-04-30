import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";



describe("contact us testcases",() => {


beforeAll (() => {
    console.log("before all");
})

beforeEach (() => {
    console.log("before each testcase")
}) 

test ("Should load contact us component", () => {


    render(<Contact/>);
    const heading  = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

});
test ("Should load button inside contact us component", () => {


    render(<Contact/>);
    const button  = screen.getByText("submit");

    expect(button).toBeInTheDocument();

});

test ("Should load input name inside contact us component", () => {


    render(<Contact/>);


    const inputname  = screen.getByPlaceholderText("Name");

    expect(inputname).toBeInTheDocument();

});

test("should load 2 input boxes on the contact component", () =>{
    render(<Contact/>);

    // querying
    const inputboxes = screen.getAllByRole("textbox");
    // console.log(inputboxes.length);
    expect(inputboxes).toHaveLength(2);
    inputboxes.forEach((input) => 
        expect(input).toBeInTheDocument()
    );
    
});
});