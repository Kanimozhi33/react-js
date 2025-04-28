import Body from "../Body";
import { render } from "@testing-library/jest-dom";
import MOCK_DATA from  "../mocks/mocksResList.json";

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test (" should be rendering the body component with search feature in it",() => {

render(
    <Body/>
)
});
