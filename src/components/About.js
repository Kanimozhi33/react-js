import { FaExternalLinkAlt } from "react-icons/fa";

// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// import { Component} from "react";
// import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div className="bg-gray-200">
            <div className="p-10 text-gray-700 font-bebas bg-gray-50 shadow-lg text-4xl w-[600px] mx-auto items-center justify-center rounded-b-full">
                <h1 className="items-center text-center font-bold font-bebas
                 ml-4 mt-4 transform opacity-0 animate-in-1 ">ABOUT</h1>
                 
            </div>
           <div className="p-10  justify-center items-center font-sans font-semibold text-balance  rounded-xl">
           <p className=" max-w-screen-2xl w-8/12 mx-auto md:w-6/12  text-lg leading-relaxed text-gray-700 text-justify transform opacity-0 animate-in-2">
            Craving your favorite local eats delivered swiftly? Meal Minit is your answer, passionately 
            connecting you with the best restaurants right to your doorstep. Whether it's a solo snack or
             a group gathering, effortlessly explore diverse menus and order in seconds. Powering this seamless
            experience is a modern frontend built with React for a dynamic and responsive interface, expertly
            managing data flow with Redux.<br></br>
            <br></br>
            Behind the scenes, Parcel ensures lightning-fast loading, while the sleek and visually appealing
             design is crafted with Tailwind CSS. This powerful combination of frontend technologies delivers a 
             smooth, intuitive, and rapid food ordering journey, making your next delicious meal just a few taps away.
              Start your culinary adventure with Meal Minit today!</p>
</div> 
<div className="max-w-2xl pb-10  mx-auto text-lg leading-relaxed text-gray-500 justify-left">
    <div className="flex items-center w-6/12 mx-auto">
        <span className="font-bold transform opacity-0 text-center   animate-in-1">feel free to visit my</span>
        <div className="flex items-center ml-2 bg-orange-600 text-black rounded-2xl p-2 hover:text-white hover:border-white hover:shadow-xl font-sans font-bold
        focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-100 active:text-gray-900 active:scale-95 transition duration-75 ease-in-out transform opacity-0 animate-in-1">
             PORTFOLIO<FaExternalLinkAlt className="ml-4" /></div> </div>
    
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