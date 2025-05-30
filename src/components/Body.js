import RestaurantCard from "./RestaurantCard";
import { useState , useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import Top_Rated from "./Top_rated";
import { withDiscount } from "./RestaurantCard";
import { FaRegDotCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";





const Body = () =>{
    
const [listOfRestaurant,setListOfRestaurant] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);

const [topRatedRestaurant, setTopRatedRestaurant] = useState(false);

const [searchtext, setsearchtext] = useState();

const RestaurantCardwithDiscount = withDiscount(RestaurantCard);

const Top_Rate = 4.4;

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

useEffect(() => {
    let currentList = [...listOfRestaurant];

    if (searchtext){
        currentList = currentList.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
    }

    if (topRatedRestaurant) {
        currentList = currentList.filter((res)=> res.info.avgRating && res.info.avgRating >= Top_Rate);
    }

    setFilteredRestaurant(currentList);
}, [searchtext, topRatedRestaurant, listOfRestaurant])

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
        <div className="bg-white py-8 mx-auto justify-center items-center ">
            <div className="items-center justify-center flex-auto max-w-[200px]">
                <div className= " flex p-4  ">
                   <div> <input 
                    type = "text"
                    data-testid="searchInput"
                    className=" rounded-lg transform border-orange-600 flex-grow text-blue-950  font-libre ease-in-out placeholder-gray-400:
                    duration-300 transition-all opacity-0 animate-in-1 text-bold focus:outline-none focus:ring-4 focus:ring-orange-600 focus:ring-opacity-75 focus:border-orange-500" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/></div>


                    <div className="flex items-center hover:scale-105 justify-center ml-2">
                    <button className="search-btn py-3 flex px-6 font-semibold font-oswald bg-orange-600 border-b-neutral-950 rounded-lg
                    transform duration-200 transition-all ease-in-out opacity-0 animate-in-1 hover:shadow-xl 
                     hover:text-white scale-105 focus:outline-none focus:ring-2 focus:ring-black"
                     
                     
                    
                     onClick={()=>{
                         
 
                         const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                         setFilteredRestaurant(filteredRestaurant);
                     }}
                     > <FaSearch className="items-center justify-center mr-2" /> Search</button> 
                 </div>
                 <div className="flex checkbox items-center text-black justify-center ml-10 focus:outline-none
                 px-6 py-3 font-oswald border-black bg-orange-600 active:text-white rounded-lg transform duration-300 
                 transition-all opacity-0 animate-in-1 focus:bg-orange-700">
                    
                    <Top_Rated
                    label= {"Top" + "Rated"} 
                    checked={topRatedRestaurant}
                    onChange={() =>
                        setTopRatedRestaurant(!topRatedRestaurant)
                    }/>
                    <IoStar className="ml-4"/>
                 </div>
                 {/* <div className="justify-center items-center ml-10 "> */}
                 {/* <button className="filter-btn p-2 m-0.5 font-oswald border-black bg-orange-600 active:text-white rounded-lg transform duration-300 
                 transition-all opacity-0 animate-in-1 focus:bg-orange-700" onClick={()=>
                 {
                     const filteredList = listOfRestaurant.filter(
                     (res)=> res.info.avgRating > 4.3) ;
                     setFilteredRestaurant(filteredList);
                     
                     }}> <FaRegDotCircle className="text-green-800 focus:text-black"/> {Top_Rated}
                     Top Rated </button></div> */}
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
                //   ((restaurant.info.aggregatedDiscountInfoV3) != null) ? (<RestaurantCardwithDiscount  resData={restaurant} /> ):
                   (<RestaurantCard resData={restaurant} />)
                }

                   
                </Link>
                ))}
            
               
                
            </div>
             
        </div>
    )
}

export default Body;