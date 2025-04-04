import ItemList from "./ItemList";




const ResCategory = ({data})=> {


    return (<div className="text-center items-center flex flex-col w-full">
        {/* {header */}
        <div className="bg-yellow-300 shadow-yellow-950 w-6/12 justify-center p-4 my-4 rounded-2xl hover:bg-green-500">
            <div className="flex justify-between">
                <span className="font-bold text-center text-lg " >{data?.title}</span>
            <span>⬇</span>
            </div>
            <ItemList items = {data.itemCards}/>
        </div>
        {/* body */}
        
        
    </div>);

};

export default ResCategory;