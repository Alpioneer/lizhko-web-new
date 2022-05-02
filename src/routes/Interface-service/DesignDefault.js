import React from 'react';
import { Routes, Route} from "react-router-dom";
import InterfaceDesignList from './Task/InterfaceDesignList';
import Prototyping from 'routes/Interface-service/Task/Prototyping.js'
import UIdesign from 'routes/Interface-service/Task/UI-design.js'
import UXdesign from 'routes/Interface-service/Task/UX-design.js'





const DesignDefault=()=>{

  return (
    <>

    <Routes>

    <Route exact path='/Interface-service' element={<InterfaceDesignList/>}/>
    <Route exact path='/Interface-service/UI-design' element={<UIdesign/>}/>
    <Route exact path='/Interface-service/UX-design' element={<UXdesign/>}/>
    <Route exact path='/Interface-service/Prototyping' element={<Prototyping/>}/>
  
    </Routes>


    </>
  );
}

export default DesignDefault;

