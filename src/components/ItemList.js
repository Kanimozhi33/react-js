import { ITEMS_URL } from "../utils/constants";


const ItemList = ({items}) =>
    
{
    return (
        
            
            <div>
                {items.map((item) => (<div key={item.card.info.id} className="p-2 border-gray-400 border-b-1 text-left">

                    <div><span className="p-5 font-sans font-bold">{item.card.info.name}</span>
                    <img
                    alt="item-img" src={ITEMS_URL+item.card.info.imageId}></img>
                    <span className=""> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice /100}</span>

                </div>
                    <p className="text-xs p-5 ">
                        {item.card.info.description}
                    </p>
                
            </div> ))} 
            
        </div>
    );
};

export default ItemList;