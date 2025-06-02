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
        className="res-card bg-gray-200 w-[250px] justify-center items-center  m-4 p-2 h-[300px] rounded-lg hover:bg-gray-300  transform duration-300 transition-all opacity-0 animate-in-1">
            <img className="res-image rounded-lg  flex w-[280px] h-[200px]"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}></img>
                <div className=" text-xl ">
                    <h3 className="font-bold">{name}</h3>
                <h3 className="cuisines text-sm font-semibold text-red-800">{cuisines.join(", ")}</h3>
                {/* <h3 className="price font-sans text-lg flex text-center items-center "><FaIndianRupeeSign className="mr-2"/> {costForTwo}</h3> */}
                <h3 className="font-oswald text-sm flex text-center items-center "><MdTimer className=" text-green-900 text-lg"/> {deliveryTime} mins  | <RiStarSFill className=" text-amber-600 text-lg"/> {avgRating}</h3>
                                
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