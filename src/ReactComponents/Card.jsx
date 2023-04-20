import React from "react";

function Card(props){
    return (
       <div className={props.stylings1}>

        {/* Heading Section of Card  */}


       <h1 className="text-2xl font-bold text-white ">{props.cardHeading}</h1>


       {/* Sensor Data ---> fetching from backend  */}


       {/* Description about the Sensor  */}

        <div className="motion-safe:animate-fadeIn3s text-gray-400 opacity-90">{props.cardDescription}</div>
       </div>
    );
}

export default Card;