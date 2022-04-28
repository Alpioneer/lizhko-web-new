import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";




const AvatarCard = (props) => {


  console.log(require)


    const BG=styled.section`

    display:flex;
    height:auto;
    padding:10vw 10vw;
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
    `

    const InfoPic=styled.div`
   width:400px;
   height:400px;
   min-width:400px;
    border:1px solid blue;
    opacity:1;
    position:relative;
    ${props.left? 'right:3%' : 'left:3%'}
    `


const AvatarImg=styled.img`

&&&{
border:"5px solid red",
width:"100%",
height:"100%"
}
  


`
    return (
      <>

      <BG props>
      <InfoAvatar><TextOne text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/></InfoAvatar>
      <InfoPic><AvatarImg src={"https://freight.cargo.site/t/original/i/f08a0ddc4ae406f559b7e2732039240e2ae423fec09a12fc5a3b35b71bac0d35/9.jpg"}/></InfoPic>
      </BG>


      </>
      )
  }
  


  export default AvatarCard