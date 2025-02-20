import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count1:1
        }
    }



    render(){
        return (
        <div className="user-card">
            <h1>count = {this.state.count}</h1>
            <botton onClick={()=>{
                this.setState({count: this.state.count +3})
            }}>increase</botton>
            
            <h2>
                Name: {this.props.name}
            </h2>
            <h3>
                Location: Nilgiris<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        ); }
}

    
  
export default User;