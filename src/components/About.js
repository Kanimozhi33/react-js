import { FaExternalLinkAlt } from "react-icons/fa";

// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// import { Component} from "react";
// import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div>
            <div className="p-10 text-orange-500 text-4xl">
                <h1 className="items-center text-balance font-bold ">ABOUT</h1>
                
            </div>
           <div className="p-10 justify-center items-center font-sans font-semibold text-balance ">
           <p className=" max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 text-justify">Get ready for Meal Minit - your quick and easy food delivery app! 
            We're passionate about connecting you with the best local restaurants and bringing their
             amazing food directly to your door. Whether it's a solo snack or a group gathering,
              discover diverse menus and order in seconds. Behind the scenes, Parcel bundles the 
              power of React, Redux, while Tailwind CSS ensures a smooth, visually appealing
               and lightning-fast experience. Your food adventure starts now with Meal Minit!</p>
</div> 
<div className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 text-justify">
    <div className="justify flex-wrap">feel free to visit my<h2> PORTFOLIO<FaExternalLinkAlt /></h2> </div>
    
</div>
        </div>
    )
};

// class  About extends React.Component{

//     constructor(props){
//         super(props)
//     };
    
//     componentDidMount(){
//         console.log("componentdidmount of about(parent)");
//     }

//     componentWillUnmount(){
        
//         console.log("happend when the mounting disappears ");
//     }
//     render(){
        
//     return (
//         <div>
//             <h1> 
//                 About class component
//             </h1>
//             <div>logged in user
//                 <UserContext.Consumer>
//                     {(loggedInUser) => console.log(loggedInUser)}
//                 </UserContext.Consumer>
//             </div>
//             <h2>this is the react learnings</h2>
//             <User/>
//             <UserClass name ={"Kanimozhi VM (class)"} location={"the nilgiris"}/>
            
//         </div>
//     );

//     }

// }



export default About;