import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";




const DividedBanner = (props) => {



    const BG=styled.section`
    display:flex;
    height:566px;
    align-items:center;
    justify-content:center;
    flex-direction:${props.left?'row':'row-reverse'}
    `
    const InfoTask=styled.div`
    width:50%;
    padding:5%;
    border:1px solid orange;
    background-color:white;
    z-index:1;
    flex-direction: column;
    box-sizing:border-box;
    color:blue;
    `
    const InfoPic=styled.div`
    width:50%;
    height:566px;
    box-sizing:border-box;
    background-color:blue;
    `


    return (
      <>

      <BG props>
      <InfoTask><TextOne text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/></InfoTask>
      <InfoPic/>
      </BG>


      </>
      )
  }
  


  export default DividedBanner