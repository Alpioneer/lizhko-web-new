import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from "react-router-dom";


const GlobalStyle = createGlobalStyle`


html {
  cursor: url(https://static.cargo.site/images/up.png), auto !important;
}

body {

  width:100vw;
  overflow:none;
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  box-sizing:border-box;

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
