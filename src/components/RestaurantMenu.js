import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] =  useState(null);

    const {resId} = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () =>
    {
        const data = await fetch(
            MENU_URL+resId);
        const json = await data.json();

        // console.log(json);
            setResInfo(json);
        };

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