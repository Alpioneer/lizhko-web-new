import React from "react";
import styled from "styled-components";


const Home =()=>{

    const Banner=styled.div`
    
    width:100vw;
    height:40vh;
    background-color:blue;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    `
    return(

        <>
       <Banner>this is video played.</Banner>
        </>
    )
    
}

export default Home