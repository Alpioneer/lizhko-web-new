import React from "react";
import styled from "styled-components";


const TextOne = (props)=>{

   const StyledText=styled.h1`

  

   font-size:${props.light? "1.8rem" : "2rem" };
   font-weight:${props.light? "100" : "bold" };
   

   `
    
    return (
    <>
    <StyledText>{props.text}</StyledText>
    </>
    )

}

export default TextOne