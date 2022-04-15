import  React ,{useState} from 'react';
import styled from 'styled-components';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header() {

  const [opentype,setOpentype] =useState(false);




  console.log("초기 opentype",opentype)




  const getOpentype=(type)=>{
    setOpentype(type);
   console.log("Header에서 오픈타입?",opentype)
  }  


  const drawerOpen =(opentype)=>{
    console.log("hey?")
    setOpentype(true);
  }






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
  height:40px;
  z-index:1;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;

  
  `


  return (
    <>
    <Header props>
      <HNode><Link to="/"><Lizhko width="80px"/></Link></HNode>

   <HNode props onClick={()=>drawerOpen(opentype)}>
    <MenuIC width="20px"/>
   <Drawer getOpentyp={getOpentype} opentype={opentype}/>
   </HNode>

    </Header>
   
    </>
  );
}