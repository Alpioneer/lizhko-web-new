import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "routes/Home";



const AppRouter = () => {

    return(

        <>

    <Home/>

    <Routes>

    <Route path="/"/>

    </Routes>
 

        </>
    )

    
}

export default AppRouter;