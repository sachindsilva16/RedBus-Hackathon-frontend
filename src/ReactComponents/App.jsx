import React from "react";
import Header from "./Header"
import Card from "./Card";
import Footer from "./Footer"
import TagLine from "./TagLine"

function App(){
    return(
        
        <div className="container mt-[20px] flex flex-col  mx-auto justify-center h-auto">

            {/* Heading  */}

            <Header/>

            {/* Main Container  */}

            {/* Tag line for the header section  */}

            <TagLine/>

            <div className=" motion-safe:animate-fadeIn2s  flex flex-col md:flex-row md:flex-wrap  items-center border  md:h-auto border-gray-500 rounded-md mb-10 m-6 p-10 md:w-[1200px] md:mx-auto md:justify-center ">




            {/* Components of Sensor Data  */}


            {/* Card 1 */}
            <Card stylings1="motion-safe:animate-fadeIn1s flex items-center flex-col m-2 px-4  py-8 space-y-4 shadow-sm shadow-blue-500 mt-4 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4" cardHeading="This is Card 1" cardDescription="Card 1 Description"/>


            {/* Card 2 */}
            <Card stylings1="motion-safe:animate-fadeIn1.5s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 2" cardDescription="Card 2 Description"/>


            {/* Card 3 */}
            <Card stylings1="motion-safe:animate-fadeIn2s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 3" cardDescription="Card 3 Description"/>

            {/* Card 4 */}
            <Card stylings1="motion-safe:animate-fadeIn2.5s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 4" cardDescription="Card 4 Description"/>

            {/* Card 5 */}
            <Card stylings1="motion-safe:animate-fadeIn3s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 5" cardDescription="Card 5 Description"/>

            {/* Card 6 */}
            <Card stylings1="motion-safe:animate-fadeIn3.5s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 6" cardDescription="Card 6 Description"/>

            {/* Card 7 */}
            <Card stylings1="motion-safe:animate-fadeIn4s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 7" cardDescription="Card 7 Description"/>

            {/* Card 8 */}
            <Card stylings1="motion-safe:animate-fadeIn4.5s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 8" cardDescription="Card 8 Description"/>

            {/* Card 9 */}
            <Card stylings1="motion-safe:animate-fadeIn5s flex items-center flex-col m-4 px-4 py-8 space-y-4 shadow-sm shadow-blue-500 w-[350px] h-auto min-h-[270px] md:w-[300px] md:mx-4"cardHeading="This is Card 9" cardDescription="Card 9 Description"/>


            


            </div>

            {/* Footer Section  */}

            <Footer/>
        </div>


    )
}

export default App;