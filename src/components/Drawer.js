import React from "react";
import styled from "styled-components";
import {Routes, Route,Link} from "react-router-dom"
import Home from "routes/Home";



const Drawer = (props) => {


    const DrawerBG= styled.div`
    width:20vw;
    height:400px;
    background-color:white;
    position:absolute;
    top:0;
    right:0;
    color:black;
    opacity:${props.opacity};
    font-size:16px;
    `


    return (
      <>
      <DrawerBG props>

      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Memebers">Memebers</Link></li>
          <li><Link to="/Works">Works</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
       </ul>

      </DrawerBG>
      </>
      )
  }
  


  export default Drawer;