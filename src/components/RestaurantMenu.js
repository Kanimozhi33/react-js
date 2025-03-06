import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    
    

    if (resInfo === null) {
        return (
            <Shimmer/>
        );
    }
    const {text} = 
        resInfo?.data?.cards[0]?.card?.card;
    const { cuisines} = 
        resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>
                hotel
            </h1>
            <h2>{text}</h2>
            <h3>{cuisines.join(", ")}</h3>
            
            <h2>MENU:</h2>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - Rs.{item.card.info.price /100 || item.card.info.deafultPrice/100}
                    </li>
                    ))}
            
            
            </div>
    );
};


export default RestaurantMenu; 