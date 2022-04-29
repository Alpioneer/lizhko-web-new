import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";




const AvatarCard = (props) => {


    const BG=styled.section`

    display:flex;
    height:auto;
    padding:10vh 10vw;
    align-items:center;
    justify-content:center;
    flex-direction:${props.left?'row':'row-reverse'}
    
    `

    const InfoAvatar=styled.div`
    color: #444852;
    font-size:12px;
    font-weight: 400;
    letter-spacing: -0.07em;
    line-height: 1.60em;
    padding: 10%;
    border: 1px solid #3e4e4f;
    background-color: #fff;
    border-radius: 2px;
    box-sizing:border-box;
    height:500px;
    `

const AvatarImg=styled.img`
border:"5px solid red",
width:400px;
height:400px;
`


    const InfoPic=styled.div`
    z-index:5;
    position:relative;
    ${props.left? 'right:3%' : 'left:3%'}
    `


    return (
      <>

      <BG props>
      <InfoAvatar><TextOne light={false} text={props.name}/><TextOne light={true} text={props.title}/><TextRegular text={props.desc}/></InfoAvatar>
      <InfoPic><AvatarImg src={props.src}/></InfoPic>
      </BG>


      </>
      )
  }
  


  export default AvatarCard