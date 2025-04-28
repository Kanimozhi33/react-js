import RestaurantCard from "../RestaurantCard";
import { render, screen  } from "@testing-library/react";
import MOCK_DATA from ".././mocks/resCardMock.json";
import "@testing-library/jest-dom";

test ("should render RestuarantCard component with props data", () => {

    render (
        <RestaurantCard resData = {MOCK_DATA}/>
    );
    const name = screen.getByText("McDonald's");

    expect (name).toBeInTheDocument();
});

// test ("whether the offers available label appears or not", () => {

//     render (
//         <RestaurantCard data = {MOCK_DATA}/>
//     );
//     const label = screen.getByText("offers Vailable");

//     expect (label).toBeInTheDocument();
// });






