const User = (props) =>{
    return (
        <div className="user-card">
            <h2>
                Name: {props.name}
            </h2>
            <h3>
                Location: Nilgiris<br></br>
                Professsion: Software Developer<br></br>
            </h3>
        </div>
    )
};

export default User;