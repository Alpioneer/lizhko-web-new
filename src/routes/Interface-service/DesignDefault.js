import React from 'react';
import { Routes, Route} from "react-router-dom";
import InterfaceDesignList from './Task/InterfaceDesignList';
import InterfaceDesignListTwo from './Task/InterfaceDesignListTwo';



const DesignDefault=()=>{

  return (
    <>

    <Routes>
    <Route exact path='/Interface-service' element={<InterfaceDesignList/>}/>
    <Route exact path='/Interface-service/Task/InterfaceDesignListTwo' element={<InterfaceDesignListTwo/>}/>
    </Routes>

    </>
  );
}

export default DesignDefault;

