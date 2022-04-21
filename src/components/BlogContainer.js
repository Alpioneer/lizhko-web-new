import React from "react";
import styled from "styled-components";


const BlogContainer = (props) =>{

        const Container=styled.div`
        width:100%;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        padding:10vh 10vw;
        `

        const BlogTitle=styled.span`
        


        font-weight: 700;
        font-size: 3rem;
        line-height: 1;
        color: #474e60;
    }
        `


        const BlogAuthor=styled.span`


        font-weight: bold;
        color: #2c3241;
        font-size: 1rem;
        line-height: 1.3;
        `

        const BlogDate=styled.span`

        font-weight: 600;
        color: #2c3241;
        font-size: 1rem;
        line-height: 1.3;
        `


        const BlogDescribe=styled.span`
        
        font-weight: 600;
        color: #2c3241;
        font-size: 12px;
        line-height: 1.3;
    
        `
        
    
    
    
    return(

    <>

    <Container>
        <BlogTitle>{props.title}</BlogTitle>
        <BlogAuthor>{props.author}</BlogAuthor>
        <BlogDate>{props.date}</BlogDate>
        <BlogDescribe>{props.describe}</BlogDescribe>
    </Container>

    
    </>)
}



export default BlogContainer;