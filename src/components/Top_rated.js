const Top_Rated = ({label, checked, onChange}) => {
    const id = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div>
            <input
            type="checkbox" 
            id={id}
            checked={checked}
            onChange={onChange}
            className="form-checkbox h-5 w-5 text-orange-500 rounded focus:ring-offset-orange-500
            border-gray-300 transition duration-150 ease-in-out"/>
       <label htmlFor={id} className="ml-2 text-gray-700 cursor-pointer">
            {label}
        </label> 
        </div>
        
    )

};

export default Top_Rated;