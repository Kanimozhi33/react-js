import React from 'react';




const Shimmer = () => {
    return (
    
        <div className="whole-body pt-[50px] bg-gray-50 min-h-screen items-center  flex-auto mx-auto">
            
             <div className="flex justify-start items-start ">
                <div className="search-bar w-[350px] bg-gray-200  animate-pulse duration-300 opacity-80 h-[50px] rounded-2xl m-2 "></div>
                <div className="srch-btn w-[140px]  bg-gray-200 animate-pulse h-[50px] opacity-80 rounded-2xl m-2"></div>
                <div className="filter w-[100px]  bg-gray-200 animate-pulse h-[50px] opacity-80  rounded-2xl m-2"></div>
                
             </div>

             <div className="card-container flex flex-wrap p-10 rounded-2xl items-center justify-center gap-10 ">
                {Array(20)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="card w-[250px] rounded-2xl h-[300px] bg-gray-100 opacity-80 animate-pulse m-2">
                            <div className="img  p-3 items-center justify-center bg-gray-200 opacity-80 h-[60%] rounded-2xl"> 


                            </div>
                            <div className="txt h-[4%] m-5  bg-gray-200 opacity-80 rounded-2xl"></div>
                            <div className="txt h-[4%] m-5  bg-gray-200 opacity-80 rounded-2xl"></div>
                            <div className="txt h-[4%] m-5  bg-gray-200 opacity-80 rounded-2xl"></div>
                        </div>
                    ))}



             </div>
        </div>
    )}

       



export default Shimmer;