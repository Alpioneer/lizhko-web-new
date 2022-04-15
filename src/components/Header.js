import  React ,{useRef} from 'react';
import styled from 'styled-components';
import { ReactComponent as Lizhko} from '../images/brick.svg'
import { ReactComponent as MenuIC } from '../images/menuIC.svg'
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

export default function Header(props) {

  const menuTarget=useRef(null);


  console.log("Header에서" ,props)

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
  
   <HNode props={props} ref={menuTarget} onClick={()=>{menuClick(props)}}>
    <MenuIC width="20px"/>
   <Drawer props={props}/>
   </HNode>

    </Box>
   
    </>
  );
}