import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
 


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

   //conditional rendering: if the list of restaurants is empty, show the shimmer effect
    if (listOfRestaurant.length === 0) {
       return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type = "text" className="search-bar" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/>
                    <button className="search-btn"
                     
                     
                    
                    onClick={()=>{
                        console.log(searchtext);

                        const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >search</button> {
                        
                    }
                </div>
                <button className="filter-btn" onClick={()=>
                {
                    const filteredList = listOfRestaurant.filter(
                    (res)=> res.info.avgRating > 4.2) ;
                    setFilteredRestaurant(filteredList);
                    
                    }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
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