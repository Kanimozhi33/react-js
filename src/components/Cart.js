import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./cartSlice";
import { FaSadCry } from "react-icons/fa";

const Cart = () =>{

    const dispatch = useDispatch();
const handleClearCart = () =>{
    dispatch(clearCart());
}

const cartItems = useSelector((store) => store.cart.item);

    return (<div className=" p-3 m-5 py-8 min-h-[500px]">
       <h1 className="ml-4 mt-4 text-3xl font-bold text-orange-500">CART</h1> 
       <div className="p-10 rounded-2xl flex justify-center items-center">
       
        {cartItems.length === 0 ? <h1 className="font-bold text-opacity-55 font-sans text-gray text-3xl">Your Cart is empty.. Add items to your cart
            <div className="items-center justify-center flex p-5"><FaSadCry className=" h-10 w-10 items-center "/></div>
        </h1>:<button className="border-black m-2 p-2 flex font-bold rounded-2xl bg-red-600"
        onClick={()=>handleClearCart()}>Clear cart
        </button>}
            <ItemList items={cartItems}/>
       </div>
    </div>)

};


export default Cart;