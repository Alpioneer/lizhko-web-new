import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";
import Btn from "./Btn";




const DividedBannerTwo = (props) => {


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
    background-color:white;
    z-index:1;
    flex-direction: column;
    box-sizing:border-box;
    color:grey;
    font-size:12px;
    line-height:16px;
    `

    const Div=styled.div`
    width:50%;
    height:566px;
    box-sizing:border-box;
    `

    const Pic=styled.img`
     &&&{
      width:100%;
      height:100%;
     }

    `

    return (
      <>
      <BG>
      <InfoTask><TextOne light text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/><Btn linkUrl={props.linkUrl} btnText={props.btnText}/></InfoTask>
      <Div><Pic src={props.src}/></Div>
      </BG>
      </>
      )
  }
  


  export default DividedBannerTwo