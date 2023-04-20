import React from "react";
import Header from "./Header"
import Card from "./Card";

function App(){
    return(
        
        <div className="container mt-[20px] flex flex-col  mx-auto justify-center">
            <Header/>
            <div className=" motion-safe:animate-fadeIn3s  flex flex-col md:flex-row md:flex-wrap  items-center border h-[2000px] md:h-[1200px] border-gray-500 rounded-md m-6 p-10 md:w-[1200px] md:mx-auto md:justify-center ">

            <Card/>
            </div>
        </div>


    )
}

export default App;