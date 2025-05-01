import RestaurantCard from "./RestaurantCard";
import { useState , useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import UserContext from "../utils/UserContext";
import { withDiscount } from "./RestaurantCard";


const Body = () =>{
    
const [listOfRestaurant,setListOfRestaurant] = useState([]);
 const [filteredRestaurant,setFilteredRestaurant] = useState([]);

const [searchtext, setsearchtext] = useState("");

const RestaurantCardwithDiscount = withDiscount(RestaurantCard);


    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () =>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.4470564&lng=77.6839768&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
   }
   catch (error) {
    console.error("Failed to fetch data:", error);
    setListOfRestaurant([]); // Fallback to empty array in case of error
    setFilteredRestaurant([]);
}
    }
   ;


const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) 
     return( <h1>
        looks like u r offline, pls check your internet connection
     </h1>);
   
   const {loggedInUser,setUserName } = useContext(UserContext);
   //conditional rendering: if the list of restaurants is empty, show the shimmer effect
    if (!listOfRestaurant || listOfRestaurant.length === 0) {
       return <Shimmer/>;
    }

    return (
        <div className="bg-gray-100">
            <div className="pl-8">
                <div className= " flex p-4 ">
                    <input 
                    type = "text"
                    data-testid="searchInput"
                    className="bg-gray-200 rounded-lg" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/>


                    <div className="flex items-center justify-center">
                    <button className="search-btn p-2  bg-green-400 border-b-neutral-950 rounded-lg"
                     
                     
                    
                     onClick={()=>{
                         
 
                         const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                         setFilteredRestaurant(filteredRestaurant);
                     }}
                     >Search</button> 
                 </div>
                 
                 <button className="filter-btn p-2 m-0.5 bg-green-400 border-black rounded-lg" onClick={()=>
                 {
                     const filteredList = listOfRestaurant.filter(
                     (res)=> res.info.avgRating > 4.3) ;
                     setFilteredRestaurant(filteredList);
                     
                     }}>Top Rated Restaurant "(more than 4.3)"</button>
                     <div>
                        <label>username:

                        </label>
                        <input className="border-black border-2 p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)

                        }>
                        </input>
                     </div>
                    </div>
                    </div>
                    

               


            <div className="res-container flex flex-wrap">
            {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                {   
                  ((restaurant.info.aggregatedDiscountInfoV3) != null) ? (<RestaurantCardwithDiscount  resData={restaurant} /> ):
                   (<RestaurantCard resData={restaurant} />)
                }

                   
                </Link>
                ))}
            
               
                
            </div>
             
        </div>
    )
}

export default Body;