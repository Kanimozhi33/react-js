const Shimmer = () => {
    return (
    
        <div className="whole-body pt-[50px] bg-white min-h-screen">
            
             <div className="flex justify-center items-center">
                <div className="search-bar w-[400px] bg-gray-400 animate-pulse h-[50px] rounded-2xl m-5 "></div>
                <div className="srch-btn w-[80px]  bg-gray-400 animate-pulse h-[50px] rounded-2xl m-5"></div>
                <div className="filter w-[80px]  bg-gray-400 animate-pulse h-[50px] rounded-2xl m-5"></div>
                
             </div>

             <div className="card-container flex flex-wrap p-10 rounded-2xl items-center justify-between ">
                {Array(12)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="card w-[300px] rounded-2xl h-[400px] bg-gray-100 animate-pulse m-2">
                            <div className="img  m-5 items-center justify-center bg-gray-200 h-[45%] rounded-2xl"> 


                            </div>
                            <div className="txt h-[8%] m-5  bg-gray-200 rounded-2xl"></div>
                            <div className="txt h-[8%] m-5  bg-gray-200 rounded-2xl"></div>
                            <div className="txt h-[8%] m-5  bg-gray-200 rounded-2xl"></div>
                        </div>
                    ))}



             </div>
        </div>
    )}

       



export default Shimmer;