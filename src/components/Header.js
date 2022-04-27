import  React ,{useState,useRef} from 'react';
import styled from 'styled-components';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header() {

  const [opentype,setOpentype] =useState(false);

  const getOpentype=(type)=>{
    setOpentype(type);
  }  
  
const d = document;

const menuRef=useRef(null)

d.onclick=(e)=>{

  let a = opentype;
  let b = (e.target.tagName!=="NAV")
  let c = (e.target===menuRef.current)

  if(!a&&c){
    setOpentype(true);
  } else if(a&&b) {
    setOpentype(false);
  }else{
  }
}




  /* d.click = true,false   opentype = true,false , tagname:nav = true ,false    */

  




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


  const Header= styled.header`

  padding:0 60px;
  box-sizing:border-box;
  width:100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:black;
  z-index:5;
  background-color:none;
 
  `

  const HNode=styled.div`

 width:80px;
  height:60px;
  min-height:60px;
  z-index:1;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;

  
  `

  return (
    <>
    <Header props>

   <Drawer getOpentype={getOpentype} opentype={opentype}/>
      <HNode><Link to="/"><Lizhko height="60px" width="80px"/></Link></HNode>
   <HNode ref={menuRef} props>
    <MenuIC  width="20px"/>
   </HNode>
    </Header>
   
    </>
  );
}