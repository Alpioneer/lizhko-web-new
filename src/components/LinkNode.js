import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";



const LinkNode = (path,text) =>{

    console.log(path,text)

    return(

        <>
<li>
<Route to={path}>{text}</Route>
</li>

</>





    )
}


export default LinkNode;