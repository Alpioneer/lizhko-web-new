import React ,{useRef} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


const Drawer = (props) => {

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
    let b = props.opentype;
    /*
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log("coords is" ,coords)*/

        //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이면, nothing
      //props opentype이 true일때, 이벤트 타겟이 드로우 타겟이면, nothing
       // 이게 중요, props opentype이 true일때, 이벤트 타겟이 드로우 타겟이 아니라면, props opentype이 false로 바뀌어야함
      //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이 아니라면, nothing

    if(!a&&!b){
      props.getOpentype(true);
    }else if(!a&&b){
      props.getOpentype(false);
    }
      else {
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
    font-size:2rem;
    z-index:100;
    display:none;
    ${(props) => (console.log(props.props.opentype),props.props.opentype? `display:block` : `display:none`)}`

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
      <DrawerBG props={props} ref={drawerTarget}>
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