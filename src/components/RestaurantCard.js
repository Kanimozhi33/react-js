import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {imageId} = resData;
    const {text,rating,delivery,price} = resData?.action;

    return(
        <div className="res-card">
            <img className="res-image"
                alt="res-logo"
                src={CDN_URL+imageId}></img>
                
                <h3>{text}</h3>
                <h3>price:{price}</h3>
                <h3>delivery time:{delivery}</h3>
                <h3>rating:
                    {rating}
                </h3>
                
                
                
                

                
            
        </div>
    )
}


export default RestaurantCard;