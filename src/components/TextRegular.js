import React from "react";
import styled from "styled-components";


const TextRegular = (props)=>{


    const Span=styled.span`
    color: #444852;
    font-size: 1.1em;
    font-weight: 400;
    letter-spacing: -0.07em;
    line-height: 1.60em;
    `
    
    return (<>
    <Span>{props.text}</Span>
    </>)

}

export default TextRegular