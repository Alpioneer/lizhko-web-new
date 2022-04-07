import React ,{useRef,useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"
import { Mouse } from "@mui/icons-material";

const Drawer = (props) => {

  const [drOpentype,setdrOpentype]=useState(props.opentype);

console.log("indrawer ", drOpentype)
console.log(props)
  const drawerTarget=useRef(null);

  const d = document;
 
/*
  //type 1//
  const drawerClick=(event)=>{
    if(event.target===drawerTarget.current){
      console.log("when it is drawer")
      console.log(event.target);
      console.log(event)
      console.log("clicked drawer")
      console.log("------------------------")
    }else{
      console.log("when it is not drawer")
      console.log(event.target);
      console.log(event)
      console.log("clicked not drawer")
      console.log("------------------------")
    }
  }

  d.addEventListener('click',drawerClick,true);
 
*/
  ///type 2///



  d.onclick=(event)=>{

    let a = (event.target===drawerTarget.current)
    let b = props.opentype

        //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이면, nothing
      //props opentype이 true일때, 이벤트 타겟이 드로우 타겟이면, nothing
       // 이게 중요, props opentype이 true일때, 이벤트 타겟이 드로우 타겟이 아니라면, props opentype이 false로 바뀌어야함
      //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이 아니라면, nothing

    if( b && !a ){
      console.log("first",drOpentype)
      setdrOpentype(true);
      console.log("second",drOpentype);

      console.log("logic is working")

    }else {
       
      console.log("drawer")
    
    }

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
    opacity:${!props.opacity};
    font-size:2rem;
    display:${props.opentype? "inline-block" : "none"};
    z-index:100;
    
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