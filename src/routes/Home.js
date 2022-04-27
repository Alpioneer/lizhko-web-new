import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";




const Home =()=>{

    const Banner=styled.div`
    width:100%;
    height:600px;
    background:black;
    color:white;
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center;
    line-height:30px;

    `

    const VideoWrapper =styled.section`
    display:flex;
    width:100%;
    `

    const TestPlayer=styled(ReactPlayer)`
    width=100%;
height=600px;

    `

    const TestText=styled.span`
    color:red;
    font-size:20px;
    `


    /* https://codingbroker.tistory.com/18*/
    return(

        <>
       <Banner>Now is the time to think more about the meaning of design in business.<br/>
기업의 비즈니스에서 디자인의 의미를 생각해 볼 때입니다.</Banner>

<VideoWrapper>

<TestText>Now is the time to think more about the meaning of design in business.<br/>
기업의 비즈니스에서 디자인의 의미를 생각해 볼 때입니다.</TestText>
<TestPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        />
</VideoWrapper>

        </>
        
    )
    
}

export default Home;