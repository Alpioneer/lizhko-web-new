import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from "react-router-dom";


const GlobalStyle = createGlobalStyle`

body {

  margin:0;
  padding:0;
  display:flex;
  justify-content:center;


}
`




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <App />
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
