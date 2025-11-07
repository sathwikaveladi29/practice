import React from "react";

function Conditonalrender({ isSignIn}){
    // if(isSignIn){
    // return <h1>welcome back</h1>
    // }
    // else{
    // return <h2>please signup</h2>
    // }
    // }
    
    return (
        <div>
                {isSignIn ? <h1> welcome back</h1>: <h1>please sign up</h1>}
        </div>
    )
}

export default Conditonalrender;
    