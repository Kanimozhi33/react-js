import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { RiHome2Fill } from "react-icons/ri";
import final_logo from "../utils/final_logo.png";   



const Header = () =>{

    const [btnName,setbtnName] = useState("Log in");
    // console.log("header is rendered");
// if no dependancy array , useeffect ia been called every componenet render
// if the depency array is empty = [] , useeffect is called only once
// if dependancy is not empty = [btnName], useeffect is called every time the value of btnName changes(updated)
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
// subcribing to the store
    const cartItems = useSelector((store) => store.cart.item);




    return (
        <div className="flex justify-between bg-orange-400 shadow-lg h-30">
            <div className="logo-container flex">
                <img className="max-w-30 p-3 absolute rounded-b-full " src= {final_logo} ></img>
                
            </div>
            <div className=" flex items-center font-mono m-10 text-black text-4xl font-bold absolute pl-20">
                    <h1>MealMinit</h1>
                </div>
            <div className=" flex items-center space-x-5 bg-orange-400  ">
                <ul className="flex p-4 m-4  ">
                    {/* <li className="px-4">
                        online status: {onlineStatus ? "✅" : "❌"};
                    </li> */}
                    <div className="p-5  flex-wrap font-mono bg-orange-100 font-bold flex rounded-4xl space-x-2">
                    <li className="flex justify-center items-center ">
                    <RiHome2Fill /></li> 
                        <li className=" items-center justify-center font-bold">
                        <Link to="/"> Home</Link></li></div>
                    
                    {/* <li className="px-4">
                        <Link to= "/grocery">Groceries</Link>
                    </li> */}
                    <div className="p-5  flex-wrap font-mono bg-orange-100 font-bold flex rounded-4xl space-x-2"><li className="px-4">
                        <Link to= "/about">About</Link></li></div>
                    
                    {/* <li className="px-4">
                        <Link to="/contact">Contact Us</Link></li> */}
                    {/* <li className="px-4">
                        <Link to= "/feedback">Feedbacks</Link></li> */}

                    <div className=" flex m-2.5 font-mono bg-orange-100 rounded-full"><li className="px-4 font-bold">
                    <div className="w-10 flex bg-orange-950 text-orange-200 rounded-b-full rounded-t-full items-center justify-center "><h3> {cartItems.length}</h3></div>
                        <Link to="/cart"> Cart
                        
                        </Link></li></div>
                    
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