import React, { useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App(){

  const [opentype,setOpentype] =useState(false);

console.log("초기 opentype",opentype)

  const getOpentype=(x)=>{
    setOpentype(x);

    console.log("앱에서 뭘까요",opentype)
  }  
  
  return (
    <>
<Header opentype={opentype} getOpentype={getOpentype}/>
<Drawer opentype={opentype} getOpentype={getOpentype}/>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
