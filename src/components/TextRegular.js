import React from "react";
import styled from "styled-components";


const TextRegular = (props)=>{


    const Span=styled.span`
    color: #444852;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 14px;
    `
    
    return (<>
    <Span>{props.text}</Span>
    </>)

}

export default TextRegular