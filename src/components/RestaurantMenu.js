import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () =>{
    

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);
    
    const [expandIndex,setExpandIndex] = useState(null);

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

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    // console.log(categories);
    return (
        <div className="text-center bg-gray-200 font-oswald">
            <div className="bg-black rounded-b-full text-orange-600 p-10 ">
                
            <div>
            <h2 className="font-extrabold  text-2xl ">{text}</h2>
            </div>
            
            <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
            </div>
            {categories.map((category,index) => 
            (
                <ResCategory key={category?.card?.card?.title} 
                 data = {category?.card?.card}
                show={index === expandIndex ? true : false}
                setExpandIndex={() =>
                    setExpandIndex(index)

                }/>
            )

            )};




            {/* <h2>MENU:</h2>
            {itemCards.map((item) => (
                <li className="text-2xl " key={item.card.info.id}>
                    {item.card.info.name} - Rs.{item.card.info.price /100 || item.card.info.deafultPrice/100}
                    </li>
                    ))} */}
            
            
            </div>
    );
};


export default RestaurantMenu; 