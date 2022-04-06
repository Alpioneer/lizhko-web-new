import React ,{useRef} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { Mouse } from "@mui/icons-material";

const Drawer = (props,event) => {

  console.log("in Drawer",props.opentype)



  const drawerTarget=useRef(null);


  const d = document;

  d.addEventListener('click', event)


  d.onclick=(event)=>{
    console.log("클릭 됌 & what event is  >>>>" , event)
  }



  const listenrTest=()=>{


  }

  const drawerOut = () =>{

  //(click===!drawerTarget.current) && opentype===true ? display none : 



  }


    const DrawerBG= styled.div`

    width:20vw;
    height:100vh;
    background-color:white;
    border-left:1px solid #3e4e4f;
    border:20px 30px 90px 30px;
    position:fixed;
    top:0;
    right:0;
    color:black;
    opacity:${props.opacity};
    font-size:2rem;
    
    `




    const DrawerUL=styled.ul`
    list-style:none;
    `
    const DrawerLI=styled.li`
    list-style:none;
    font-weight:100;
    letter-spacing:-0.6px;

    & a{
        text-decoration:none;
        color:rgba(35, 39, 42, 1);
      }

    &:active{
        color:red;
        font-weight:bold;
    }

    
    `
    
    return (
      
      <>
      <DrawerBG props ref={drawerTarget}>
      <DrawerUL>
          <DrawerLI><Link to="/">Home</Link></DrawerLI>
          <DrawerLI><Link to="/Memebers">Memebers</Link></DrawerLI>
          <DrawerLI><Link to="/Works">Works</Link></DrawerLI>
          <DrawerLI><Link to="/About">About</Link></DrawerLI>
          <DrawerLI><Link to="/Blog">Blog</Link></DrawerLI>
          <DrawerLI><Link to="/Gallery">Gallery</Link></DrawerLI>
       </DrawerUL>
      </DrawerBG>
      </>
      )
  }
  


  export default Drawer;