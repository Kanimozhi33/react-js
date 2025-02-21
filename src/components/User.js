import React from "react";
import { useState, useEffect } from "react";

const User = () =>{

    const [count, setCount] = useState(0);

    useEffect(() => {},[])

        return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <button onClick={()=>{
                setCount(count + 1);
            }}>increase</button>
            
            <h2>
                Name: kanimozhi
            </h2>
            <h3>
                Location: Nilgiris<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        ); }


    
  
export default User;