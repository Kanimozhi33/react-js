import { useDispatch } from "react-redux";
import { ITEMS_URL } from "../utils/constants";
import { addItem } from "./__tests__/cartSlice";

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
                 className="p-2 border-black border-t-1 text-left rounded-2xl ">

                    <div 
                    className="flex justify-between">
                        <span 
                        className="p-5 font-sans font-bold text-2xl">{item.card.info.name}</span>
                    <div
                     className="flex justify-end">
                    <button onClick={() => handleAddItem(item)}
                        className="p-2 bg-black shadow-2xl absolute text-amber-50 
                     rounded-2xl cursor-pointer hover:bg-green-800">ADD +</button>
                    <img
                    alt="item-img" src={ITEMS_URL+item.card.info.imageId} 
                    className="w-48 h-auto flex rounded-2xl"></img></div>
                    
                </div>
                <span className="font-bold p-5">  
                    ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice /100}</span>

                    <p className=" p-5 ">
                        {item.card.info.description}
                    </p>
                
            </div> ))} 
            
        </div>
    );
};

export default ItemList;