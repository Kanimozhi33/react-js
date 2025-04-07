import ItemList from "./ItemList";
import { useState } from "react";



const ResCategory = ({data})=> {

    const [show,setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (<div className="text-center items-center flex flex-col w-full">
        {/* {header */}
        <div className="bg-yellow-300 shadow-yellow-950 w-6/12 h-auto justify-center p-4 my-4 rounded-2xl">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-center text-lg " >{data?.title}</span>
            <span>⬇</span>
            </div>

           {show && <ItemList items = {data.itemCards}/>}
        </div>
        {/* body */}
        
        
    </div>);

};

export default ResCategory;