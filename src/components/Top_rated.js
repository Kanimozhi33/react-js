const Top_Rated = ({label, checked, onChange}) => {
    const id = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className="flex justify-center items-center  scale-105 ease-in-out
        transform transition-all duration-300 ">
            <input
            type="checkbox" 
            id={id}
            checked={checked}
            onChange={onChange}
            className="form-checkbox h-5 w-5 text-orange-500 rounded  
            flex focus:outline-none
            border-gray-300 transition duration-150 ease-in-out"/>
       <label htmlFor={id} className="ml-2 text-gray-700 hover:text-amber-500 font-bold   cursor-pointer">
            {label}
        </label> 
        </div>
        
    )

};

export default Top_Rated;