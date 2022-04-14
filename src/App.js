import React, { useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App(){

  const [opentype,setOpentype] =useState(false);

  const getOpentype=(x)=>{
    setOpentype(x);
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
