import React from "react";
import styled from "styled-components";



const Btn = (props) =>{

    const BtnShape = styled.button`

    width:100%;
    heigth:80px;
    margin-top:40px;
    border:1px solid #474e60;
    background:white;
    color:#474e60;
    padding 10px;
    border-radius:2px;


    &:hover{
        background: rgba(71, 78, 96, 0.02);
        box-shadow: 2px 4px 20px rgb(56 100 246 / 10%);
    }
    
    `

    
    return(
    <>

    <BtnShape>{props.btnText}</BtnShape>


    </>)
}



export default Btn;