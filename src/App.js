import React, { useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';


function App(){

  const [opentype,setOpentype] =useState(false);

  console.log("초기 opentype",opentype)

  const getOpentype=(x)=>{
    console.log("working")
    setOpentype(x);

   console.log("app에서 오픈타입?",opentype)
  }  
  
  return (
    <>
<Header opentype={opentype} getOpentype={getOpentype}/>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
