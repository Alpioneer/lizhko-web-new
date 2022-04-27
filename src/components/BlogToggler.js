import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const BlogToggler = () =>{


    const Container = styled.div`

    width:100%;
    box-sizing:border-box;
    padding: 40px 120px;
    
    `
    const RouteButton = styled.button`
    width:100%;
    text-decoration: none;
    border: 1px solid #474e60;
    padding: 0.5rem 1rem 0.5rem 2rem;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin: 1em 1.6rem 0.5rem 1.6rem;
    text-align:left;
    background:white;

    & a{
        color:#474e60;
        text-decoration:none;#474e60
    }

    & a:active{
     opacity:0.4;
        
    }

    & a:visited{
        opacity:0.4;
           
       }
    `
    
    return(

    <>
    <Container>
        <RouteButton><Link to='/Blog/PostOne'>Work process.</Link></RouteButton>
        <RouteButton><Link to='/Blog/PostTwo'>Article. </Link></RouteButton>
        <RouteButton><Link to='/Blog/PostThree'>Design management. </Link></RouteButton>
    </Container>


    </>)
}



export default BlogToggler ;