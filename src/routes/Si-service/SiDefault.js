import React from 'react';
import { Routes, Route} from "react-router-dom";
import InterfaceDesignList from './Task/InterfaceDesignList';



const DesignDefault=()=>{



  
  return (
    <>

    <Routes>
    <Route exact path='/Si-service' element={<InterfaceDesignList/>}>Hello worldsdaklfjsakljfklsdjlkf</Route>
    </Routes>

    </>
  );
}

export default DesignDefault;

