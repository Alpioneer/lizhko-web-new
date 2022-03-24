import React from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



const Footer= ()=>{

    const Item = styled(Paper)(({ theme}) => ({
        
        border: "none",
       boxShadow:"0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        padding: 0.1,
        textAlign: 'left',
        color: "gray"
      }));

    return(

        <>
<Stack
  direction="column-reverse"
  justifyContent="center"
  alignItems="flex-start"
  spacing={2}
>
  <Item> <h4> team@lizhko.io</h4></Item>
  <Item><h4>16, Eulji-ro 5-gil, Jung-gu, Seoul, Republic of Korea</h4></Item>
  <Item>Copyright ⓒ 2020-2021. All Rights Reserved.</Item>
</Stack>

</>
    )


}


export default Footer;