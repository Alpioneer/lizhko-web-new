import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";


const WorkPost = (props)=>{

    const Container = styled.div`

    padding:60px 10vw;
    width:100%;

      }

    `

    const Img =styled.img`
    
    width:50%;
    height:50%;

    `

    return(


    <>
    <Container>


        <TextOne light text={props.data.carbom.title}/>
        <TextRegular text={props.data.carbom.author}/>
        <TextRegular text={props.data.carbom.desc}/>
        {props.data.carbom.image.map(x=>(<Img src={x}/>))}
   
   </Container>
    </>)


}



export default WorkPost;