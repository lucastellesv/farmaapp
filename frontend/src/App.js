import React from 'react'
import GlobalStyle from './styles/global'


import Routes from './routes';
import history from './history';
import { Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router history = {history}>
        <Routes/>
        <GlobalStyle/>
      </Router>
    </>
  );
}

export default App;
