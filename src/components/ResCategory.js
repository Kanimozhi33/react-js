const ResCategory = ({data})=> {
console.log(data);

    return (<div>
        {/* {header */}
        <div className="bg-yellow-300">
            <span className="w-6/12 p-4" >{data?.title}</span>
            <span>⬇</span>
        </div>
        {/* body */}
    </div>);

};

export default ResCategory;