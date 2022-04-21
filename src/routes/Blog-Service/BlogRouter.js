import React from "react";
import { Routes, Route} from "react-router-dom";
import BlogPostOne from "./Task/BlogPostOne";
import styled from "styled-components";
import BlogPostTwo from "./Task/BlogPostTwo";
import BlogPostThree from "./Task/BlogPostThree";

const BlogRouter =()=>{

 

 
    return(

        <>


  <Routes>
      
    <Route exact path='/Blog/PostOne' element={<BlogPostOne/>}></Route>
    <Route exact path='/Blog/PostTwo' element={<BlogPostTwo/>}></Route>
    <Route exact path='/Blog/PostThree' element={<BlogPostThree/>}></Route>

 </Routes>

 
 
        </>
    )
    
}

export default BlogRouter;