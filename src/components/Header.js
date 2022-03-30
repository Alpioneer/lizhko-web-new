import  React  from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Drawer from './Drawer';



export default function Header() {


  const [opentype,setOpentype] = useState(false);
  const [opacity,setOpacity] =useState(0);


  console.log(opacity)

  const menuClick = (opentype,opacity) =>{
   opentype? opacity=0 : opacity=1
   setOpentype(!opentype);
   setOpacity(opacity);

  };


  const Box= styled.div`

  width:100vw;
  height:5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:black;
  z-index:0;
  background-color:red;
 
  `

  const HNode=styled.div`

  width:40px;
  height:40px;
  background-color:yellow;
  z-index:1;
  position:relative;
  `


  return (

    <>
    <Box>
  <HNode>text</HNode>
  <HNode onClick={()=>{menuClick(opentype)}}>
    <Drawer opacity={opacity}/>
  </HNode>
    </Box>
   
    </>
  );
}