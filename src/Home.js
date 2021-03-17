import React from "react";
import { Link } from "react-router-dom";

const Home = function Home() {
  return (
    <>
      <div className="wrapper">
        <h1>
          Find the <span>Books</span> you are looking for anywhere{" "}
        </h1>
        <p>
          Search for books anywhere, you dont need to know the name of the book,
          if you know the name of the author or the publisher, just type and
          search.
        </p>
        <Link to="/Search">
          <button>Search Now!</button>
        </Link>
      </div>

      <section className="firstSection contentWrapper">
        <h1>The Importance of reading books</h1>
        <h3>Reading daily improves vocab!</h3>
        
        <p>
          
          Whether for pleasure, study or information, reading practice improves
          vocabulary and streamlines reasoning and interpretation.{" "}
        </p>
        <img src="https://i.vgy.me/OSIjWz.png" alt="A book" />
      </section>
      <section className="secondSection contentWrapper">
        <h3>Mental Stimulation</h3>
        <p>
         
          A well-written novel can transport you to other realms, while an
          engaging article will distract you and keep you in the present moment,
          letting tensions drain away and allowing you to relax.
        </p>
        <img src="https://i.vgy.me/NbcCCo.png" alt="A man Thinking" />
      </section>
      <section className='filler contentWrapper'>
        <div>
          <h1>All the books you look for in one place</h1>
          <img src="https://i.vgy.me/65dTcM.png" alt="65dTcM.png"/>
        </div>
      </section>
      <section className = 'tech contentWrapper'>
        <div><h1>Technologies used</h1></div>
      </section>
      <footer className="footer">
        <h1>Bookify</h1>
        <p>© Copyright 2021 Kevin Gomez @Cerlans. All rights reserved. </p>
      </footer>
    </>
  );
};

export default Home;
