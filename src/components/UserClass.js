import React from "react"


class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count1: 1,
            count2: 2
        };
        console.log("constructor is called");
    }
    
    render(){
        const {name,location} = this.props;
        const {count,count1} = this.state;
        console.log("render is called");
        return (
            <div className="user-card-class">
                <h1>count = {count}</h1>
                <button onClick={() =>
                    {
                        this.setState({
                            count : this.state.count +1
                        })

                    }
                }>count increase</button>
                <h1>view counts = {count1}</h1>
                <button onClick={() =>{
                    this.setState({
                        count1: this.state.count1 +5
                    })
                }}>views</button>
            <h2> 
                Name: {name} 
            </h2>
            <h3>
                Location: {location}Nilgiris<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        );

    }
};


export default UserClass;