import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component} from "react";
import UserContext from "../utils/UserContext";
class  About extends React.Component{

    constructor(props){
        super(props)
    };
    
    componentDidMount(){
        console.log("componentdidmount of about(parent)");
    }

    componentWillUnmount(){
        
        console.log("happend when the mounting disappears ");
    }
    render(){
        
    return (
        <div>
            <h1> 
                About class component
            </h1>
            <div>logged in user
                <UserContext.Consumer>
                    {(loggedInUser) => console.log(loggedInUser)}
                </UserContext.Consumer>
            </div>
            <h2>this is the react learnings</h2>
            <User/>
            <UserClass name ={"Kanimozhi VM (class)"} location={"the nilgiris"}/>
            
        </div>
    );

    }

}



export default About;