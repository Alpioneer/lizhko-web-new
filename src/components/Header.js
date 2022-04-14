import  React  from 'react';
import styled from 'styled-components';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header(props) {

  console.log("헤더안에서 오픈타입",props.opentype)

  const menuClick = (props) =>{
  props.getOpentype(true);
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
      <HNode><Link to="/"><Lizhko width="80px"/></Link></HNode>
   
   <HNode>
    <MenuIC width="20px">
      <Drawer onClick={()=>{menuClick(props)}}/>
    </MenuIC>
   </HNode>

    </Box>
   
    </>
  );
}