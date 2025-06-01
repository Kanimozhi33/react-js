import { useDispatch } from "react-redux";
import { ITEMS_URL } from "../utils/constants";
import { addItem } from "./cartSlice";

const ItemList = ({items}) =>
    {

        const dispatch = useDispatch();

const handleAddItem = (item) => {
// dispatch an action to add the item to the cart
    dispatch(addItem(item))

}


    return (
        
            
            <div className="">
                {items.map((item) => (<div key={item.card.info.id}
                 className="p-2 border-orange-600 border-b-2 text-left rounded-2xl mx-auto ">

                    <div data-testid = "fooditems "
                    className="flex justify-between text-gray-200 mt-10">
                        <span 
                        className="p-5 font-kanit font-bold text-2xl">{item.card.info.name}</span>
                    <div
                     className="flex justify-end">
                    <button onClick={() => handleAddItem(item)}
                        className="px-4 py-2 hover:bg-black hover:text-orange-600  shadow-2xl absolute trasform transition duration-300 text-black font-bold 
                     rounded-2xl cursor-pointer bg-orange-600">ADD +</button>
                    <img
                    alt="item-img" src={ITEMS_URL+item.card.info.imageId} 
                    className="w-60 h-50 flex bg-gray-200 rounded-2xl"></img></div>
                    
                </div>
                <span className="font-bold p-5">  
                    ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice /100}</span>

                    <p className=" p-5 text-gray-200 whitespace-normal text-sm font-light line-clamp-1 overflow-ellipsis ">
                        {item.card.info.description}
                    </p>
                
            </div> ))} 
            
        </div>
    );
};

export default ItemList;