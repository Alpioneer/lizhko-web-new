import * as React from 'react';
import styled from 'styled-components';
import TemporaryDrawer from './TemporaryDrawer';




export default function Header() {

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
  <TemporaryDrawer></TemporaryDrawer>

  
    </Box>
   
    </>
  );
}