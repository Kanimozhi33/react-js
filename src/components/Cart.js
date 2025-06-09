import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./cartSlice";
import { TbMoodEmpty } from "react-icons/tb";

const Cart = () =>{

    const dispatch = useDispatch();
const handleClearCart = () =>{
    dispatch(clearCart());
}

const cartItems = useSelector((store) => store.cart.item);

    return (
    <div className=" min-h-screen tranform transition duration-300 bg-gray-200 items-center justify-between">
        <div className="p-10 text-gray-700 font-bebas bg-gray-50 shadow-lg text-4xl w-[600px] mx-auto items-center rounded-b-full">
            <h1 className="p-5 text-center text-3xl font-bebas font-bold  opacity-0 animate-in-1">CART</h1> 
        </div>
       
       
       <div className="p-10 max-w-4xl mx-auto sm:px-6">
        
        {cartItems.length === 0 ? (
        <div className="text-center mx-auto min-h-[400px]"><h1 className="font-bold  mb-6 text-gray-700 text-3xl font-oswald text-center opacity-0 animate-in-2">
            Your Cart is empty...<br></br>
                 Add items to your cart
            <TbMoodEmpty className="text-9xl mx-auto mt-10 text-orange-600"/>
        </h1></div>
        ):(
        <div className="w-full md:w-8/12  lg:w-6/12 h-auto items-center mx-auto justify-center text-center ">
            <h1 className="text-gray-700 text-xl text-center font-bold pb-10  my-auto border-1  border-orange-600">Items</h1>
            <ItemList items={cartItems} showButton= {false}/>
            <button className="border-black m-2 mb-5 text-left font-bold rounded-2xl bg-orange-600 hover:bg-black hover:scale-105 hover:text-orange-600 hover:border-white 
        border-2 active:bg-white active:text-black opacity-0 font-oswald animate-in-2 p-3"
        onClick={()=>handleClearCart()}>
            
            Clear cart
        </button>
        </div>)}
            
       </div>
    </div>)

};


export default Cart;