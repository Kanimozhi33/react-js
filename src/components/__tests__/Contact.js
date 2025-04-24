import { useContext } from "react";
import UserContext from "../../utils/UserContext"





const Contact = ()=> {

const {loggedInUser} = useContext(UserContext);


    return(
        <div>
            Contact Us
            <h4>{loggedInUser}</h4>
        </div>
    )
};

export default Contact;