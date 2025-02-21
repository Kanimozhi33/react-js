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
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kanimozhi");
        const json = await data.json();
        console.log(json);


        this.setState(

        {
            userInfo:json
        });

    }

   
    render(){
        const {login,id} = this.state.userInfo;
       
        return (
            <div className="user-card-class">
                
                
                
            <h2> 
                Name: {login} 
            </h2>
            <h3>
                Location: {id}<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        );

    }
};


export default UserClass;