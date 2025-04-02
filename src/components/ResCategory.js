const ResCategory = ({data})=> {
console.log(data);

    return (<div>
        {/* {header */}
        <div className="w-6/12 bg-yellow-300 shadow-lg p-4 ">
            <span>{data?.title}</span>
            <span>⬇</span>
        </div>
        {/* body */}
    </div>);

};

export default ResCategory;