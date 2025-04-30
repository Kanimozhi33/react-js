import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from  "../mocks/mocksResList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn( () => {
    console.log("fetch  mocked called");
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test("should search relist for restaurant in the list of cards", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("rescard")
    
    expect (cardsBeforeSearch.length).toBe(13);
    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    

    fireEvent.change(searchInput,{
        target: {
            value: "Restaurant"
        }
    });
    fireEvent.click(searchBtn);
    // console.log(searchInput);
    // console.log(searchBtn);
const cards = screen.getAllByTestId("rescard");
    expect (searchBtn).toBeInTheDocument();
    expect (cards.length).toBe(2);
   
});

test ("should filter the top rated restaurants",async() => {
    await act (async () =>
        render (
            <BrowserRouter>
            
            <Body/>
            </BrowserRouter>
        ));

        const cardsBeforeFilter = screen.getAllByTestId("rescard");

        expect (cardsBeforeFilter.length).toBe(13);

        const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurant \"(more than 4.3)\""});
        expect (filterBtn).toBeInTheDocument();

        fireEvent.click(filterBtn);

        const cardsAfterFltr = screen. getAllByTestId("rescard");
    
        expect (cardsAfterFltr.length).toBe(4);
} )

