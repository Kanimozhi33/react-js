import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class  About extends React.Component{



    render(){
        
    return (
        <div>
            <h1>
                About
            </h1>
            <h2>this is the react learnings</h2>
            <User name={"kanimozhi"}/>
            <UserClass name ={"Kanimozhi VM (class)"} location={"the nilgiris"}/>
        </div>
    );

    }

}



export default About;