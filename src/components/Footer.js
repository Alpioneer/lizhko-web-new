import React ,{useRef} from "react";
import styled from "styled-components";



const Footer= ()=>{
  


const Footer = styled.footer`

display:flex;
flex-direction:column;
gap:5px;
padding:5vh 5vw;
width:100%;
box-sizing:border-box;
z-index:-5;

`
 const FooterType = styled.span`

   color:#474e60;
   font-size:12px;
 
 `

    return(

        <>

        <Footer>


        <FooterType>team@lizhko.io</FooterType>
        <FooterType>16, Eulji-ro 5-gil, Jung-gu, Seoul, Republic of Korea</FooterType>
        <FooterType>Copyright ⓒ 2020-2021. All Rights Reserved.</FooterType>


        </Footer>

</>
    )


}


export default Footer;