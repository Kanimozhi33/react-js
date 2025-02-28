import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

    const [btnName,setbtnName] = useState("Log in");
    console.log("header is rendered");
// if no dependancy array , useeffect ia been called every componenet render
// if the depency array is empty = [] , useeffect is called only once
// if dependancy is not empty = [btnName], useeffect is called every time the value of btnName changes(updated)
    const onlineStatus = useOnlineStatus();


    return (
        <div className="header">
            <div className="logo-container">
                <img className="the-logo" src= {LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online status: {onlineStatus ? "👍🏻" : "👎🏻"};
                    </li>
                    
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to= "/grocery">Groceries</Link>
                    </li>
                    <li>
                        <Link to= "/about">About</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link></li>
                    <li>Feedbacks</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnName === "Log in"
                        ? setbtnName("Log out")
                        : setbtnName("Log in");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header; 