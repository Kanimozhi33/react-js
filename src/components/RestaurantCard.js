import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const {name,avgRating,cloudinaryImageId,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    const {cuisines} = resData?.info;
    return(
        <div className="res-card bg-gray-200  m-4 p-4 w-[250px] rounded-lg hover:bg-green-400">
            <img className="res-image rounded-lg font-bold py-2 text-2xl"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}></img>
                <div className=" text-2xl">
                    <h3 className="font-bold">{name}</h3>
                <h3 className="cuisines text-3xl font-bold text-red-800">{cuisines.join(", ")}</h3>
                <h3 className="price font-sans text-xl ">price: {costForTwo}</h3>
                <h3 className="font-sans text-xl">delivery time: {deliveryTime} mins</h3>
                <h3 className="font-sans text-xl">average rating: {avgRating}</h3>                
                
                </div>
                
         
        </div>
    )
}

export const withDiscount = (RestaurantCard)=>{
    return (props) =>{

            return (
                <div>
                    <label className="absolute bg-green-600 rounded-lg p-2 m-2 text-center font-bold text-white">
                         offers available
                    </label>
                    <RestaurantCard {...props}/>
                </div>


            )


    }


}



export default RestaurantCard;