// import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { RiHome2Fill } from "react-icons/ri";

import { RiInformationFill } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { GiNoodles } from "react-icons/gi";


const Header = () =>{

    // const [btnName,setbtnName] = useState("Log in");
    // console.log("header is rendered");
// if no dependancy array , useeffect ia been called every componenet render
// if the depency array is empty = [] , useeffect is called only once
// if dependancy is not empty = [btnName], useeffect is called every time the value of btnName changes(updated)
const onlineStatus = useOnlineStatus();

    // const {loggedInUser} = useContext(UserContext);
// subcribing to the store
    const cartItems = useSelector((store) => store.cart.item);

//  {onlineStatus ? }


    return (
        <div className="  flex justify-between bg-orange-600 shadow-lg max-h-[120px]  transform transition-all duration-150 ">
            <div className=" w-20 flex m-5 items-center  ">
                
                <label className="p-5 font-bold text-4xl opacity-0 animate-in-1"><Link to="/" title="Home"><GiNoodles /></Link></label>
                <h1 className=" items-center justify-center font-caveat flex-wrap font-semibold text-3xl opacity-0 animate-in-1"> MEAL MINIT</h1>
                </div>
            
            <div className="p-10 flex items-center space-x-5 bg-orange-600  ">
                <ul className="flex space-x-5 pointer-events-auto ">
                    {/* <li className="px-4">
                        online status: {onlineStatus ? "✅" : "❌"};
                    </li> */}
                    <div className=" w-10 items-center justify-center font-mono opacity-0 animate-in-1 hover:bg-stone-100
                    font-bold flex rounded-2xl space-x-2 transform transition-all duration-300">
                     
                        <li className=" flex items-center justify-center font-bold hover:bg-">
                        <Link to="/" title="Home"><RiHome2Fill /></Link></li></div>
                    
                    {/* <li className="px-4">
                        <Link to= "/grocery">Groceries</Link>
                    </li> */}
                    <div className=" w-10 items-center justify-center font-mono opacity-0 animate-in-1 hover:bg-stone-100
                     font-bold flex rounded-2xl transform transition-all duration-300 space-x-4 ">
                     
                        <li className=" flex items-center justify-center font-bold" >
                        <Link to= "/about" title="About us"><RiInformationFill/></Link></li></div>
                    
                    {/* <li className="px-4">
                        <Link to="/contact">Contact Us</Link></li> */}
                    {/* <li className="px-4">
                        <Link to= "/feedback">Feedbacks</Link></li> */}

                    <div className="h-10 w-10 items-center justify-center opacity-0 animate-in-1 font-mono hover:bg-stone-100 font-bold
                     flex rounded-2xl transform transition-all duration-300 space-x-2">
                    <li className="relative flex items-center justify-center font-bold"> 
                        <Link to="/cart" title="view cart" className="hover:bg-orange-0 flex items-center"> 
                        <BsCartCheckFill className="h-6 w-6" /> 
                        <label className="absolute top-[-0.5rem] right-[-0.5rem] badge w-5 h-5 bg-stone-300 rounded-full text-black text-xs font-semibold flex items-center justify-center">
                            {cartItems.length}
                        </label>
                        </Link>
                    </li>
                    </div>
                    
                    {/* <button className="login-btn" onClick={()=>{
                        btnName === "Log in"
                        ? setbtnName("Log out")
                        
                        : setbtnName("Log in");
                        }}>{btnName}</button>
                        <li className="px-4 font-bold">{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
        
    )
}


export default Header; 