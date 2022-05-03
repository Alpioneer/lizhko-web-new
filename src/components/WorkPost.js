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

    console.log("what data  is", props.data.carbom.image)

   
    return(


    <>
    <Container>


        <TextOne light text={props.data.carbom.title}/>
        <TextRegular text={props.data.carbom.author}/>
        <TextRegular text={props.data.carbom.desc}/>
        <img src={props.data.carbom.image.map(x=>{return x})}/>
   
   </Container>
    </>)


}



export default WorkPost;