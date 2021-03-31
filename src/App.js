import React, { useState, useEffect } from "react";
import "./style.css";
import Home from "./Home.js";
import Search from "./Search.js";
import Book from "./Book.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/Search/Book/:id">
            <Book />
          </Route>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

function Nav() {
  return (
    <>
      <nav className="navigation">
        <Link to="/">
          <h1>Bookify</h1>
        </Link>
        <ul className='desktopnav'>
          <li><a href='https://github.com/cerlans/bookify' target='_blank'>About</a></li>
          <li><a href='https://github.com/cerlans' target='_blank'>Contact</a></li>
        </ul>
      </nav>
      <ul className='mobile-Hidden'>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  );
}

function Footer(){
   return ( <footer className="footer">
        <h1>Bookify</h1>
        <p>© Copyright 2021 Kevin Gomez @Cerlans. All rights reserved. </p>
        <div className='socialLinks'>
          <a href='https://github.com/cerlans' target='_blank'><i className="fab fa-github-square"></i></a>
        </div>
      </footer>
   )
}