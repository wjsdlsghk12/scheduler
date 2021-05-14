import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Index from './route/home';
import Main from './route/main';
// import Home from './route/css/home.css';
// import main from './route/css/main.css';
// import styled from "styled-components";




function App() {  
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Index}/>
      <Route path="/main" component={Main}/>
    </BrowserRouter>
  );
}

export default App;
