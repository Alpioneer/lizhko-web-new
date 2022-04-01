import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App() {
 

  const [opacity,setOpacity] =useState(0);

  const getOpacity=(num)=>{
    setOpacity(num)

  }

  return (
    <>


<Header getOpacity={getOpacity}/>
<Drawer opacity={opacity}/>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
