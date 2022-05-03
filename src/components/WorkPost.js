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

   

    return(


    <>
    <Container>


        <TextOne light text={props.title}/>
        <TextRegular text={props.author}/>
        <TextRegular text={props.desc}/>
            
   </Container>
    </>)


}



export default WorkPost;