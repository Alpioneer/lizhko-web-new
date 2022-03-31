import  React  from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'


export default function Header(props) {


  console.log("in header props >>>" , props)





  const [opentype,setOpentype] = useState(false);
  const [opacity,setOpacity] =useState(0);


  const menuClick = (opentype,opacity) =>{


   opentype? opacity=0 : opacity=0.9
   setOpentype(!opentype);
   setOpacity(opacity);

   

   console.log("in header opacity >>>", opacity)

  };


  const Box= styled.div`

  width:100v%;
  padding:0 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:black;
  z-index:0;
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

      <HNode><Lizhko/></HNode>
  <HNode onClick={()=>{menuClick(opentype)}}>
    <MenuIC width="30px"/>
  </HNode>
    </Box>
   
    </>
  );
}