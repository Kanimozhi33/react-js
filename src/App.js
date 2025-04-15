import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";



const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () =>{

const [userName,setUserName] = useState();

useEffect(() => {
    const data = {
        name : "kanimozhi"
    };
    setUserName(data.name);
},[]);



    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName} }>
            <div className="app">
            <Header/>
            <Outlet/>
        </div>
    
            </UserContext.Provider>
        )
        
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },  
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            
            {
                path:"/feedback",
                element: <Feedback/>
            }, 

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
