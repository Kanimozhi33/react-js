import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./cartSlice";


const Cart = () =>{

    const dispatch = useDispatch();
const handleClearCart = () =>{
    dispatch(clearCart());
}

const cartItems = useSelector((store) => store.cart.item);

    return (<div className=" p-3 m-5">
       <h1 className="text-3xl font-bold">Cart</h1> 
       <div className="p-5 w-6/12 m-auto bg-amber-300 rounded-2xl">
       
        {cartItems.length === 0 ? <h1>Your Cart is empty.. Add items to your cart</h1>:<button className="border-black m-2 p-2 flex font-bold rounded-2xl bg-red-600"
        onClick={()=>handleClearCart()}>Clear cart
        </button>}
            <ItemList items={cartItems}/>
       </div>
    </div>)

};


export default Cart;