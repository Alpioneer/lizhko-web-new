import React from "react";
import styled from "styled-components";



const BandText = (props)=>{

    

    const BandShape = styled.div`

    list-style: none;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid rgba(62, 78, 79, 0.32);
    background-color: rgba(62, 78, 79, 0.02);
    font-weight: 400;
    font-size:12px;
    line-height:1.3;
    box-sizing:border-box;
    width:100%;

      }

    `


    return(
    <>
    <BandShape>{props.text}</BandShape>
    </>)


}



export default BandText;