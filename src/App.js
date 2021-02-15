import React, { useState,useEffect } from 'react';
import "./style.css";
import Home from './Home.js';
import Search from './Search.js';
import Book from './ViewMore.js';
import { BrowserRouter,Switch,Route,Link,useHistory} from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component= {Home}/>
      <Route path='/Search' component= {Search}/> 
      </Switch>
    </BrowserRouter>
   </>
  );
}

