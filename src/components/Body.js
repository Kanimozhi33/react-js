import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 


const Body = () =>{
    console.log("body is rendered");
const [listOfRestaurant,setListOfRestaurant] = useState([]);
 const [filteredRestaurant,setFilteredRestaurant] = useState([]);

const [searchtext, setsearchtext] = useState("");
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3550296&lng=76.80023659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };

const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) 
     return( <h1>
        looks like u r offline, pls check your internet connection
     </h1>);
   

   //conditional rendering: if the list of restaurants is empty, show the shimmer effect
    if (listOfRestaurant.length === 0) {
       return <Shimmer/>;
    }

    return (
        <div className="bg-yellow-300">
            <div className="pl-8">
                <div className= " flex p-4 ">
                    <input type = "text" className="bg-gray-200 rounded-lg" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/>


                    <div className="flex items-center justify-center">
                    <button className="search-btn p-2  bg-green-400 border-b-neutral-950 rounded-lg"
                     
                     
                    
                     onClick={()=>{
                         console.log(searchtext);
 
                         const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                         setFilteredRestaurant(filteredRestaurant);
                     }}
                     >search</button> {
                         
                     }
                 </div>
                 <button className="filter-btn p-2 m-0.5 bg-green-400 border-black rounded-lg" onClick={()=>
                 {
                     const filteredList = listOfRestaurant.filter(
                     (res)=> res.info.avgRating > 4.2) ;
                     setFilteredRestaurant(filteredList);
                     
                     }}>Top Rated Restaurant</button>
                    </div>
                    </div>
                    
            <div className="res-container flex flex-wrap">
            {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
                ))}
            
               
                
            </div>
             
        </div>
    )
}

export default Body;