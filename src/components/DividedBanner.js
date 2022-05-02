import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";
import Btn from "./Btn";




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
  background-color:white;
  z-index:1;
  flex-direction: column;
  box-sizing:border-box;
  color:#444852;
  font-size:12px;
  line-height:16px;
  `

  const InfoPic=styled.img`
  width:50%;
  height:566px;
  box-sizing:border-box;
  `


    return (
      <>

      <BG>
      <InfoTask><TextOne light text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/><Btn linkUrl={props.linkUrl} btnText={props.btnText}/></InfoTask>
      <InfoPic src={props.src}/>
      </BG>


      </>
      )
  }
  


  export default DividedBanner