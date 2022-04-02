import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App() {
 
  const [opacity,setOpacity] =useState(0);
  const [opentype,setOpentype] =useState(false);


  console.log("in app , opentype" , opentype)

  const getStatus=(num,type)=>{
    setOpacity(num);
    setOpentype(type);
  }

// ㄴㄷㅅ
  return (
    <>


<Header getStatus={getStatus}/>
<Drawer opacity={opacity} opentype={opentype}/>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
