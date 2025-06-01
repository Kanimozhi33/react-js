import ItemList from "./ItemList";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";


const ResCategory = ({data,show,setExpandIndex})=> {

    

    const handleClick = () => {
        setExpandIndex();
    }

    return (<div className="text-center items-center bg-gray-200 flex flex-col w-full">
        {/* {header */}
        <div className="bg-black text-orange-600 shadow-yellow-950 w-6/12 h-auto justify-center p-4 my-4 rounded-2xl">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-center text-lg " >{data?.title}</span>
            <span><FaCaretDown className="font-bold"/></span>
            </div>

           {show && <ItemList items = {data.itemCards}/>}
        </div>
        {/* body */}
        
        
    </div>);

};

export default ResCategory;