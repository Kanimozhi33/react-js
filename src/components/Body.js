import RestaurantCard from "./RestaurantCard";
import { useState , useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus"; 
import Top_Rated from "./Top_rated";
import { withDiscount } from "./RestaurantCard";
import { HiStatusOffline } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { API_URL } from "../utils/constants";




const Body = () =>{
    
const [listOfRestaurant,setListOfRestaurant] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);

const [topRatedRestaurant, setTopRatedRestaurant] = useState(false);

const [searchtext, setsearchtext] = useState("");

const [searchQuery, setSearchQuery] = useState("");


const RestaurantCardwithDiscount = withDiscount(RestaurantCard);

const Top_Rate = 4.4;

    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () =>{
        try{
        const data = await fetch(API_URL);
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

    if (searchQuery){
        currentList = currentList.filter((res)=> res.info.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (topRatedRestaurant) {
        currentList = currentList.filter((res)=> res.info.avgRating && res.info.avgRating >= Top_Rate);
    }

    setFilteredRestaurant(currentList);
}, [searchQuery, topRatedRestaurant, listOfRestaurant])

const onlineStatus = useOnlineStatus();
   if (onlineStatus === false) 
     return(  <div className="bg-white min-h-screen ">
                 <div className="text-orange-600 text-center items-center font-bebas text-5xl pt-[100px] mx-auto">
                     <HiStatusOffline className="text-center justify-center items-center mx-auto " />
                     </div>
                 <div className="text-gray-500 text-2xl text-center font-oswald mt-10">
                    <h1>looks like you are offline, please connect to your internet to proceed!!!</h1>
                 </div>
             </div>)
   
//    const {loggedInUser,setUserName } = useContext(UserContext);
   //conditional rendering: if the list of restaurants is empty, show the shimmer effect
    if (!listOfRestaurant || listOfRestaurant.length === 0) {
       return <Shimmer/>;
    }

    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
                <div className= "flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-5 sm:space-y-0 sm:space-x-3 justify-between">
               <div className="flex text-center items-center mx-auto justify-center">
                   <div className="w-full sm:w-auto flex-grow"> <input 
                    type = "text"
                    data-testid="searchInput"
                    className="h-12 rounded-lg transform border-orange-600 flex-grow text-blue-950  font-libre ease-in-out placeholder-gray-400:
                    duration-300 transition-all opacity-0 animate-in-1 text-bold focus:outline-none focus:ring-4 focus:ring-orange-600 
                    focus:ring-opacity-75 focus:border-orange-500" value={searchtext} 
                    onChange={(e) => setsearchtext(e.target.value)
                        
                    }/></div>


                    <div className="flex items-center hover:scale-105 justify-center ml-2 flex-shrink-0">
                    <button className="search-btn h-12 py-3.5 flex px-4 font-semibold font-oswald bg-orange-600  rounded-lg
                    transform duration-200 transition-all ease-in-out opacity-0 animate-in-1 hover:shadow-xl 
                     hover:text-white scale-105 focus:outline-none  "
                     
                     
                    
                     onClick={()=>{
                         
                        setSearchQuery(searchtext);
                        //  const filteredRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()) );
                        //  setFilteredRestaurant(filteredRestaurant);
                     }}
                     > <FaSearch className="items-center justify-center mr-2 text-lg sm:text-xl " /></button> 
                 </div></div>
                 <div className=" items-center flex flex-shrink-0 ml-80 text-white opacity-0 animate-in-1 bg-orange-600 px-4 py-2 rounded-lg 
                               shadow-md hover:bg-blue-950  hover:text-amber-500 hover:shadow-lg hover:scale-105
                               transition-all duration-300 ease-in-out ">
                    
                    <Top_Rated
                    label= {"Top" + "Rated"} 
                    checked={topRatedRestaurant}
                    onChange={() =>
                        setTopRatedRestaurant(!topRatedRestaurant)
                    }/>
                    <IoStar className="ml-2 text-lg sm:text-xl"/></div>
               
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
                    

               


            <div className="res-container  flex flex-wrap gap-6 justify-center items-center">
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