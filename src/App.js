import React from 'react';
import AppRouter from 'components/Router';
import Header from 'components/Header'
import Footer from 'components/Footer';
import {createGlobalStyle} from 'styled-components';



function App(){



  const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    height:100vh;
  }
`;

  return (
    <>
    <GlobalStyle/>
<Header/>
<AppRouter/>
<Footer/>

    </>
  );
}

export default App;
