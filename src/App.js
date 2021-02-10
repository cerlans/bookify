import React, { useState,useEffect } from 'react';
import "./style.css";
import Cards from './Cards.js';
import Home from './Home.js';
import Search from './Search.js';
import Footer from './Footer.js';
import { BrowserRouter,Switch,Route,Link,useHistory} from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path='/' component= {Home}/>
      <Route path='/Search' component= {Search}/> 
      </Switch>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

function Header(){
  return(
  <nav className='navigation'>
     <h1>Bookify</h1>
     <ul>
        <li><i className="fas fa-bars"></i></li>
     </ul>
     </nav>
  )
}

