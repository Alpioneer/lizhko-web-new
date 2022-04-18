import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Gallery from "routes/Gallery";
import Home from "routes/Home";
import Members from "routes/Members";
import Works from "routes/Works";
import Blog from "routes/Blog";


const AppRouter = () => {

    return(
        <>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/memebers" element={<Members/>}/>
    <Route exact path="/Works" element={<Works/>}/>
    <Route exact path="/Blog" element={<Blog/>}/>
    <Route exact path="/Gallery" element={<Gallery/>}></Route>

    </Routes>
 
        </>
    )

    
}

export default AppRouter;