import RestaurantMenu from "../RestaurantMenu";
import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mocks/mocks_resMenu.json";
import "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart";




global.fetch = jest.fn(() => 
    Promise.resolve ({
        json: () =>  Promise.resolve(MOCK_DATA),
    })
);

test ("should load restaurant menu component", async() => {
    await act (async() => {
        render ( <BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
                </Provider>
            </BrowserRouter>
        );
    })
    screen.debug();
    const accordianHeader = screen.getByText("Fries & Sides")
    console.log(accordianHeader);
    // expect (accordianHeader).toBeInTheDocument();
    fireEvent.click(accordianHeader);


    expect(screen.getAllByTestId("fooditems").length).toBe(4)


const addbtns = screen.getAllByRole("button", {name: "ADD +"})

fireEvent.click(addbtns[0]);

// console.log(addbtns.length);


    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
   fireEvent.click(addbtns[1]);
   expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
 
const cartItems = screen.getByRole("link", {name: "Cart - (2 items)"});
// expect(cartItems.length).toBe(6);

fireEvent.click(cartItems);
fireEvent.click(screen.getByText("Clear cart"))
 expect(screen.getAllByTestId("fooditems").length).toBe(4);
expect(screen.getByText("Your Cart is empty.. Add items to your cart")).toBeInTheDocument();
});
