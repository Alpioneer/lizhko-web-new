import React from "react";
import styled from "styled-components";


const Home =()=>{

    const Banner=styled.div`
    width:100vw;
    height:600px;
    background:black;
    color:white;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
    line-height:30px;
    `
    return(

        <>
       <Banner>Now is the time to think more aadsfasfbout the meaning of design in business.<br/>
기업의 비즈니스에서 디자인의 의미를 생각asdfasfas해 볼 때입니다.</Banner>
        </>
        
    )
    
}

export default Home;