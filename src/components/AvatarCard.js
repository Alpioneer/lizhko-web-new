import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";




const AvatarCard = (props) => {



    const BG=styled.section`

    display:flex;
    height:auto;
    padding:10vw 10vw;
    border:1px solid red;
    align-items:center;
    justify-content:center;
    flex-direction:${props.left?'row':'row-reverse'}
    
    `

    const InfoAvatar=styled.div`
    width:50%;
    padding:5%;
    border:1px solid black;
    background-color:white;
    z-index:1;
    flex-direction: column;
    color:blue;
    `

    const InfoPic=styled.div`
   width:400px;
   height:400px;
   min-width:400px;
    border:1px solid blue;
    opacity:0.3;
    position:relative;
    background-color:blue;
    ${props.left? 'right:3%' : 'left:3%'}
    `


    return (
      <>

      <BG props>
      <InfoAvatar><TextOne text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/></InfoAvatar>
      <InfoPic/>
      </BG>


      </>
      )
  }
  


  export default AvatarCard