import RestaurantCard from "./RestaurantCard";
import { useState , useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 

import { withDiscount } from "./RestaurantCard";
import { FaRegDotCircle } from "react-icons/fa";

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
   
//    const {loggedInUser,setUserName } = useContext(UserContext);
   //conditional rendering: if the list of restaurants is empty, show the shimmer effect
    if (!listOfRestaurant || listOfRestaurant.length === 0) {
       return <Shimmer/>;
    }

    return (
        <div className="bg-white py-8">
            <div className="items-center justify-center flex-auto mx-auto max-w-[200px]">
                <div className= " flex p-4  ">
                   <div> <input 
                    type = "text"
                    data-testid="searchInput"
                    className=" rounded-lg transform border-orange-600 text-blue-950  font-libre
                    duration-300 transition-all opacity-0 animate-in-1 text-bold focus:outline-none focus:ring-4 focus:ring-orange-600" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/></div>


                    <div className="flex items-center  justify-center ml-10">
                    <button className="search-btn py-3 px-6 font-semibold font-oswald bg-orange-600 border-b-neutral-950 rounded-lg
                    transform duration-250 transition-all ease-in-out opacity-0 animate-in-1 hover:shadow-xl 
                     hover:text-white focus:outline-none focus:ring-4  focus:ring-black"
                     
                     
                    
                     onClick={()=>{
                         
 
                         const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                         setFilteredRestaurant(filteredRestaurant);
                     }}
                     >Search</button> 
                 </div>
                 <div className="justify-center items-center ml-10 ">
                 <button className="filter-btn p-2 m-0.5 font-oswald border-black bg-orange-600 active:text-white rounded-lg transform duration-300 
                 transition-all opacity-0 animate-in-1" onClick={()=>
                 {
                     const filteredList = listOfRestaurant.filter(
                     (res)=> res.info.avgRating > 4.3) ;
                     setFilteredRestaurant(filteredList);
                     
                     }}> <FaRegDotCircle className="text-orange-600 focus:text-black"/> Top Rated </button></div>
                     {/* <div>
                        <label>username:

                        </label>
                        <input className="border-black border-2 p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)

                        }>
                        </input>
                     </div> */}
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