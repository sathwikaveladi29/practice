import React,{useState} from "react";

function ToggleComp(){
    const [isOn,setIsOn]=useState(false);
    return(
        <button onClick={()=> setIsOn(!isOn)}>
    {isOn ?'on' :'off'}</button>

    );
    }

export default ToggleComp;