import React from "react";
import styled from "styled-components";


const TextRegular = (props)=>{


    const Span=styled.span`
  
    `
    
    return (<>
    <Span>{props.text}</Span>
    </>)

}

export default TextRegular