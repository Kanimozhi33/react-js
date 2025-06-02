import React from 'react';




const Shimmer = () => {
    return (
    
        <div className="whole-body pt-[50px] bg-black min-h-screen items-center justify-center flex-auto mx-auto">
            
             <div className="flex justify-center items-center ">
                <div className="search-bar w-[350px] bg-gray-200 animate-pulse   h-[50px] rounded-2xl m-5 "></div>
                <div className="srch-btn w-[140px]  bg-gray-200 animate-pulse h-[50px] rounded-2xl m-5"></div>
                <div className="filter w-[100px]  bg-gray-200 animate-pulse h-[50px] rounded-2xl m-5"></div>
                
             </div>

             <div className="card-container flex flex-wrap p-10 rounded-2xl items-center justify-center  ">
                {Array(12)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="card w-[250px] rounded-2xl h-[300px] bg-gray-100 animate-pulse m-2">
                            <div className="img  p-3 items-center justify-center bg-gray-200 h-[60%] rounded-2xl"> 


                            </div>
                            <div className="txt h-[4%] m-5  bg-gray-200 rounded-2xl"></div>
                            <div className="txt h-[8%] m-5  bg-gray-200 rounded-2xl"></div>
                            <div className="txt h-[8%] m-5  bg-gray-200 rounded-2xl"></div>
                        </div>
                    ))}



             </div>
        </div>
    )}

       



export default Shimmer;