import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App(event) {


 
  const [opacity,setOpacity] =useState(0);
  const [opentype,setOpentype] =useState(false);


  const getStatus=(num,type)=>{
    setOpacity(num);
    setOpentype(type);
  }

  const fromDrawer=(type)=>{
    setOpentype(type);
  }
  
  return (
    <>


<Header getStatus={getStatus}/>
<Drawer opacity={opacity} opentype={opentype} fromDrawer={fromDrawer}/>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
