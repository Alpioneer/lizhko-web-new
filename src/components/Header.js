import  React  from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'
import { CatchingPokemonSharp } from '@mui/icons-material';


export default function Header(props) {

  console.log("hello")

  const [opentype,setOpentype] = useState(false);
  const [opacity,setOpacity] = useState(0);


  const menuClick = (opentype,opacity) =>{

  opentype? opacity=0 : opacity=0.9
   setOpentype(!opentype);
   setOpacity(opacity)
   props.getOpacity(opacity);
   console.log("click2")

  };


  const Box= styled.div`
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
    <Box>
      <HNode><Lizhko onClick={()=>{console.log("click")}}/></HNode>
  <HNode onClick={()=>{menuClick(opentype,opacity)}}>
    <MenuIC width="20px"/>
  </HNode>
    </Box>
   
    </>
  );
}