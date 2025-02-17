import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] =  useState(null);


    useEffect(() => {
        fetchMenu();
    },[]);
    
    const fetchMenu = async () =>
    {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.3550296&lng=76.80023659999999&restaurantId=767547&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        console.log(json);
            setResInfo(json);
        };

    if (resInfo === null) {
        return (
            <Shimmer/>
        );
    }
       
    const info = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.info?.name;
    return (
        <div className="menu">
            <h1>
                {resInfo?.data?.cards[2]?.card?.card?.info?.name}
            </h1>
            <h3>cuisines: {Array.isArray(resInfo?.data?.cards[2]?.card?.card?.info?.cuisines) ? resInfo.data.cards[2].card.card.info.cuisines.join(", ") : "N/A"}</h3>
            <h3>cost for two: rs.{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwo /100}</h3>
            <h3>avg rating : {resInfo?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h2>MENU:</h2>
            <h3>{info}</h3>
            
            </div>
    );
};


export default RestaurantMenu; 