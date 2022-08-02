import React, { useState } from "react";
export default function ButtonDisplay(){

    const[hidden,setHidden]=useState(true);
    const Display=()=>{
        setHidden(!hidden);
    }

    return(
        <div>
            <p hidden={hidden}>hi there
            </p>
            <button onClick={Display}>click here</button>
        </div>
    )
}