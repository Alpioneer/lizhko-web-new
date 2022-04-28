import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";




const Home =()=>{


    const VideoWrapper= styled.div`
    width:100%;

    `
    const TextWrapper =styled.section`
    position:absolute;
    width:100%;
    height:600px;
    display:flex;
    align-items:center;
    justify-content:center;
    `

    const TestPlayer=styled(ReactPlayer)`


    `
    const TestText=styled.span`
    color:white;
    font-size:20px;
    text-align:center;
    z-index:1;

    `

    /* https://codingbroker.tistory.com/18*/

    return(

        <>
        <VideoWrapper>


<TextWrapper>

<TestText>Now is the time to think more about the meaning of design in business.<br/>
기업의 비즈니스에서 디자인의 의미를 생각해 볼 때입니다.</TestText>
</TextWrapper>


<TestPlayer

          className='react-player'
          url='https://www.youtube.com/watch?v=WPdWvnAAurg&ab_channel=SMTOWN'
          width='100vw'
          height="600px"
          muted='true'
          playing='true'
          loop='true'
          
        />

        </VideoWrapper>

        </>
        
    )
    
}

export default Home;