import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App(event) {


  const [opentype,setOpentype] =useState(false);


console.log("초기 opentype",opentype)


  const getOpentype=async(x)=>{
    setOpentype(x);
    console.log("app으로 상태 전달 후 ",opentype)
  }


  setTimeout(console.log("app으로 상태 전달 후 ",opentype),10000)


  
  
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
