import React  from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


const Drawer = (props) => {

  ///type 2///


  /*
d.onclick=(event)=>{

    let a = (event.target===drawerTarget.current)
    let b = props.props.opentype;
    let c = (event.target===document.getElementsByTagName('svg'))

    console.log("what a is ",a)
    console.log("what b is ",b)
    console.log("what c is",c)
    console.log("방금 찍은거 >>>>>",event.target)
}*/
    /*
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log("coords is" ,coords)*/

        //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이면, nothing
      //props opentype이 true일때, 이벤트 타겟이 드로우 타겟이면, nothing
       // 이게 중요, props opentype이 true일때, 이벤트 타겟이 드로우 타겟이 아니라면, props opentype이 false로 바뀌어야함
      //props opentype이 false일때, 이벤트 타겟이 드로우 타겟이 아니라면, nothing

  
  const DrawerBG= styled.nav`
  
    width:20vw;
    height:100vh;
    background-color:white;
    border-left:1px solid #3e4e4f;
    border:20px 30px 90px 30px;
    position:fixed;
    top:0;
    opacity:0.9;
    right:0;
    color:black;
    font-size:2rem;
    z-index:150;

   ${(props) =>(console.log("Drawer")),(props.opentype? 'display:block' :'display:none')}
    `



    const DrawerUL=styled.ul`
    list-style:none;
    `
    const DrawerLI=styled.li`
    
    list-style:none;
    font-weight:100;
    letter-spacing:-0.6px;

    & a{
      text-decoration: none;
      display: inline-block;
      color: rgba(35, 39, 42, 1);
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1.4;
  
      }

      & a:hover{
        font-weight:400;
        opacity:0.9;
     }

    & a:visited{

       opacity:0.5;
       color:rgba(35, 39, 42, 1);
    }

    `


    return (
      <>
      <DrawerBG props>
      <DrawerUL>
          <DrawerLI><Link to="/">Home</Link></DrawerLI>
          <DrawerLI><Link to="/Memebers">Memebers</Link></DrawerLI>
          <DrawerLI><Link to="/Works">Works</Link></DrawerLI>
          <DrawerLI><Link to="/Blog">Blog</Link></DrawerLI>
          <DrawerLI><Link to="/Gallery">Gallery</Link></DrawerLI>
       </DrawerUL>
      </DrawerBG>
      </>
      )
  }
  
  export default Drawer;