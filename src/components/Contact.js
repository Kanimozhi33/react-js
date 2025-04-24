import { useContext } from "react";
import UserContext from "../utils/UserContext"





const Contact = ()=> {

const {loggedInUser} = useContext(UserContext);


    return(
        <div className="font-bold text-4xl text-center my-10">
            Contact Us
            <h4 className="text-right font-normal text-2xl ">{loggedInUser}</h4>
            <form>
                <input type="text" className="border-black border-2 m-2 rounded-2xl text-center" placeholder="Name"/>
                <input type="text" className="border-black border-2 m-2 rounded-2xl text-center" placeholder="Message"/>
                <button className="border-black rounded-2xl bg-green-300 p-5 m-2">submit</button>
            </form>
        </div>
    )
};

export default Contact;