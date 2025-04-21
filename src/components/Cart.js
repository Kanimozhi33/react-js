import { useSelector } from "react-redux";
import ItemList from "./ItemList";



const Cart = () =>{

const cartItems = useSelector((store) => store.cart.item);

    return (<div className="text-center p-5 m-5">
       <h1 className="text-3xl font-bold">Cart</h1> 
       <div className="p-1 w-6/12  bg-amber-300 rounded-2xl">
       <button>clear cart</button>
            <ItemList items={cartItems}/>
       </div>
    </div>)

};


export default Cart;