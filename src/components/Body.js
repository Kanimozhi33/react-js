import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Reslist from "../utils/mockData";



const Body = () =>{

const [listOfRestaurant,setlistOfRestaurant] = useState(Reslist);
 
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3884168&lng=76.7855866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setlistOfRestaurant(json.data.cards[0].card.card.imageGridCards.action);
  
    }



    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>
                {
                    const filteredList = listOfRestaurant.filter(
                    (res)=> res.action.rating > 4.0) ;
                    setlistOfRestaurant(filteredList);
                    
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map(restaurant => <RestaurantCard key ={restaurant.id}  resData= {restaurant}/>)
                }
            
               
                
            </div>
             
        </div>
    )
}

export default Body;