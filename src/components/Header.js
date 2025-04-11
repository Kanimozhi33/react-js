import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{

    const [btnName,setbtnName] = useState("Log in");
    console.log("header is rendered");
// if no dependancy array , useeffect ia been called every componenet render
// if the depency array is empty = [] , useeffect is called only once
// if dependancy is not empty = [btnName], useeffect is called every time the value of btnName changes(updated)
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-yellow-300 shadow-lg m-2.5">
            <div className="logo-container">
                <img className="w-60" src= {LOGO_URL} ></img>
            </div>
            <div className="flex items-center bg-gray-200">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        online status: {onlineStatus ? "✅" : "❌"};
                    </li>
                    
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to= "/grocery">Groceries</Link>
                    </li>
                    <li className="px-4">
                        <Link to= "/about">About</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">
                        <Link to= "/feedback">Feedbacks</Link></li>
                    <li className="px-4">
                        <Link to= "/cart">Cart</Link></li>
                    <button className="login-btn" onClick={()=>{
                        btnName === "Log in"
                        ? setbtnName("Log out")
                        : setbtnName("Log in");
                        }}>{btnName}</button>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header; 