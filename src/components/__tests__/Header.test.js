import { render, screen, fireEvent } from "@testing-library/react";
import Header from  "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";



test("should render header component with a log in button", () =>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider> 
        </BrowserRouter>
    );
    const loginbutton = screen.getByRole("button", {name: "Log in"});

    expect(loginbutton).toBeInTheDocument();
} );

test("should render header component with cart items ", () =>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider> 
        </BrowserRouter>
    );
    const cartitems = screen.getByText(/Cart/);

    expect(cartitems).toBeInTheDocument();
} );

test("should change log in button to log out button on click", () =>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider> 
        </BrowserRouter>
    );
    

    const loginbutton = screen.getByRole("button", {name: "Log in"});

    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", {name: "Log out"});

    expect(logoutbutton).toBeInTheDocument();
} );


