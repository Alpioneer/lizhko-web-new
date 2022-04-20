import React from 'react';
import { Routes, Route} from "react-router-dom";
import InterfaceDesignList from './Task/InterfaceDesignList';
import InterfaceDesignListTwo from './Task/InterfaceDesignListTwo';



const DesignDefault=()=>{



  
  return (
    <>




    <Routes>
    <Route exact path='/Interface-service' element={<InterfaceDesignList/>}>Hello worldsdaklfjsakljfklsdjlkf</Route>
    <Route exact path='/Interface-service/Task/InterfaceDesignListTwo' element={<InterfaceDesignListTwo/>}>이 정도면 되는듯</Route>
    </Routes>

    </>
  );
}

export default DesignDefault;

