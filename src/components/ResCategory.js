import ItemList from "./ItemList";
// import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";


const ResCategory = ({data,show,setExpandIndex})=> {

    

    const handleClick = () => {
        setExpandIndex();
    }

    return (<div className="text-center items-center bg-gray-50 flex flex-col w-full opacity-0  animate-in-2">
        
        <div className="bg-gray-300 text-gray-700-600 border-2 border-orange-600 hover:border-black
         w-8/12 lg:w-6/12 h-auto justify-center p-4 my-5 rounded-2xl transition-all duration-300">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-center text-lg " >{data?.title}</span>
            <span><FaCaretDown className="font-bold"/></span>
            </div>

           {show && <ItemList items = {data.itemCards}/>}
        </div>
        
        
        
    </div>)

};

export default ResCategory;