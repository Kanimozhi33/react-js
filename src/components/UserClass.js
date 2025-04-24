import React from "react"
import { Component} from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                login :"name",
                id: "default location"
            },
            
        };
       
    }
    
    componentDidMount(){
        // const data = await fetch("https://api.github.com/users/kanimozhi");
        // const json = await data.json();
        // console.log(json);


        // this.setState(

        // {
        //     userInfo:json
        // });

        this.timer = setInterval(() =>{
            // console.log("rodeo and sky eating");
        },1000);
        console.log("componentdidmount of userclass");

    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("happend when the mounting disappears ");
    }
   
    render(){
        const {login,id,avatar_url} = this.state.userInfo;
       
        return (
            <div className="user-card-class">
                
                
                
            <h2> 
                Name: {login} 

            </h2>
            <img src = {avatar_url} alt="avatar img"></img>
            <h3>
                Location: {id}<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        );

    }
};


export default UserClass;