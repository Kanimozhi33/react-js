import React from "react"


class UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        return (
            <div className="user-card-class">
            <h2>
                Name: {this.props.name}
            </h2>
            <h3>
                Location: Nilgiris<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
        );

    }
};


export default UserClass;