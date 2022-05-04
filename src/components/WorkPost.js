import React from "react";
import styled from "styled-components";
import TextOne from "./TextOne";
import TextRegular from "./TextRegular";


const WorkPost = (props)=>{

    const Container = styled.div`

    padding:60px 10vw;
    width:100%
      }

    `

    const FlexContainer =styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:60px;

    `

    const Img =styled.img`
    
    width:60%;
    margin:20px 0;
    border-radius:4px;
    box-shadow: 0px 4px 20px rgba(92, 128, 255, 0.1);


    `
    /*    
    
    <Container>


        <TextOne light text={props.data.carbom.title}/>
        <TextRegular text={props.data.carbom.author}/>
        <TextRegular text={props.data.carbom.desc}/>

        <FlexContainer>

        {props.data.carbom.image.map(x=>(<Img src={x}/>))}

        </FlexContainer>
   
   </Container>

    */


   /*Object.values(props.data).map(x=>(x.image.map(img=>console.log(img))))*/

   //console.log(Object.values(props.data)[0])


   //console.log(Object.values(props.data)[0],Object.values(props.data)[1])

    return(


    <>

<Container>


<TextOne light text={props.data.title}/>
<TextRegular text={props.data.author}/>
<TextRegular text={props.data.desc}/>

<FlexContainer>

{props.data.image.map(x=>(<Img src={x}/>))}

</FlexContainer>

</Container>



  
    </>)


}



export default WorkPost;