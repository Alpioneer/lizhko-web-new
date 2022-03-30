import React from "react";
import styled from "styled-components";




const AvatarCard = (props) => {



    const BG=styled.section`
    width:100vw%;
  
    display:flex;
    padding:10%;
    height:40vh;
    align-items:center;
    
    `

    const Left=styled.div`
    width:50%;
    border:1px solid black;
    padding:5%;
    height:100%;
    z-index:-5;
    opacity:0.5;
    `

    const Right=styled.div`

    width:50%;
    height:100%;
    border:1px solid red;
    background-color: brown;
    z-index:5;
    right:10%;
    opacity:0.3;
    position:relative;

    
    `

    return (
      <>

      <BG props>
      <Left>{props.name}{props.desc}{props.title}</Left>
      <Right></Right>
      </BG>


      </>
      )
  }
  


  export default AvatarCard