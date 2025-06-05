import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
// import User from "./User";
import UserContext from "../utils/UserContext";
import { RiStarSFill } from "react-icons/ri";
import { MdTimer } from "react-icons/md";
// import { FaIndianRupeeSign } from "react-icons/fa6";

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log(resData);
    const {loggedInUser} = useContext(UserContext);
    
    const {name,avgRating,cloudinaryImageId,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    const {cuisines} = resData?.info;
    return(
        <div data-testid = "rescard" 
        className="res-card bg-white w-[270px] justify-center items-center  m-4 p-3 h-[300px] rounded-lg scale-105 ease-in-out
          transform  transition-all duration-300 opacity-0 animate-in-1 hover:shadow-2xl hover:scale-105">
            <img className="res-image rounded-lg mb-3  w-full h-[180px]"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}></img>
                <div className=" text-xl ">
                    <h3 className="font-bold text-gray-800 line-clamp-1 mb-1">{name}</h3>
                <h3 className="cuisines text-sm font-medium text-gray-600 line-clamp-1 mb-2">{cuisines.join(", ")}</h3>
                {/* <h3 className="price font-sans text-lg flex text-center items-center "><FaIndianRupeeSign className="mr-2"/> {costForTwo}</h3> */}
                <h3 className="font-oswald text-sm flex text-center text-gray-700 items-center font-bold"><MdTimer className=" text-green-600 text-lg mr-1"/>
                 {deliveryTime} mins  | <RiStarSFill className=" text-amber-500 text-lg mr-1"/> {avgRating}</h3>
                                
                {/* <h4>{loggedInUser}</h4> */}
                </div>
                 
         
        </div>
    )
}

export const withDiscount = (RestaurantCard)=>{
    return (props) =>{

            return (
                <div>
                    <label className="absolute bg-green-600 rounded-lg p-2 m-2 text-center font-bold text-white opacity-0 animate-in-3">
                         offers available
                    </label>
                    <RestaurantCard {...props}/>
                </div>


            )


    }


}



export default RestaurantCard;