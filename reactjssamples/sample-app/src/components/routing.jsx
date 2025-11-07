import React from "react";
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";

function Home(){
    return<h2>home</h2>;
}
function About(){
    return<h2>about</h2>;
}
function notfound(){
    return<h2>notfound</h2>
}

function Routing(){
    return(
        <Router>
            <nav>
                <Link to="/">Home</Link>||
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route exact path="/" element ={<Home/>} />
                <Route exact path="/about" element ={<About/>} />
                <Route exact path="*" element ={<notfound/>} />
            </Routes>
        </Router>

    );
}

export default Routing;

