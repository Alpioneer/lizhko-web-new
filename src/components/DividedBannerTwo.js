import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";
import TextTwo from "./TextTwo";
import Btn from "./Btn";
import Lottie from "lottie-web";
import { useRef } from "react";

const DividedBannerTwo = (props) => {

  const lotContain = useRef(null);

  Lottie.loadAnimation({
    container: lotContain.current, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    
  });



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

    const Div=styled.div`
    width:50%;
    height:566px;
    box-sizing:border-box;
    `

    const Lot=styled.div`
     &&&{
      width:100%;
      height:100%;
     }

    `

    return (
      <>
      <BG>
      <InfoTask><TextOne light text={props.name}/><TextTwo text={props.title}/><TextRegular text={props.desc}/><Btn linkUrl={props.linkUrl} btnText={props.btnText}/></InfoTask>
      <Div><Lot ref={lotContain}/></Div>
      </BG>
      </>
      )
  }
  


  export default DividedBannerTwo