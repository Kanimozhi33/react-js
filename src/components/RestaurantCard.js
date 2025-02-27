import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const {name,avgRating,cloudinaryImageId,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    const {cuisines} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-image"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}></img>
                
                <h3>{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>price for two:{costForTwo}</h3>
                <h3>delivery time:{deliveryTime} mins</h3>
                <h3>average rating:{avgRating}</h3>                
                
                
                
                

                
            
        </div>
    )
}


export default RestaurantCard;