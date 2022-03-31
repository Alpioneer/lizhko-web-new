import React, { useState } from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import Drawer from 'components/Drawer';


function App() {
 

  const [mo, setMo] =useState(null);
  console.log ("in app opacity >>>>", mo)

  return (
    <>

<Header setMo={setMo}><Drawer/></Header>
<AppRouter/>
<Footer/>
    </>
  );
}

export default App;
