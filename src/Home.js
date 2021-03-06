import React from "react";
import { Link } from "react-router-dom";

const Home = function Home() {
  return (
    <>
      <div className="intro wrapper">
        <div className="searchNow">
          <h1>
            Find the <span>Books</span> you are looking for anywhere{" "}
          </h1>
          <p>
            Search for books anywhere, you dont need to know the name of the
            book, if you know the name of the author or the publisher, just type
            and search.
          </p>
          <Link to="/Search">
            <button>Search Now!</button>
          </Link>
        </div>
        <div className="illustration">
          <img src="https://i.vgy.me/mZ64tO.png" alt="mZ64tO.png" />
        </div>
      </div>

      <section className="firstSection contentWrapper">
        <div>
          <h1>The Importance of reading books</h1>
          <h3>Reading daily improves vocab!</h3>
          <p>
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.{" "}
          </p>
        </div>
        <div>
          <img src="https://i.vgy.me/OSIjWz.png" alt="A book" />
        </div>
      </section>

      <section className="secondSection contentWrapper">
        <div>
          <div>
            <h3>Mental Stimulation</h3>
            <p>
              A well-written novel can transport you to other realms, while an
              engaging article will distract you and keep you in the present
              moment, letting tensions drain away and allowing you to relax.
            </p>
          </div>
        </div>
        <div>
          <img src="https://i.vgy.me/NbcCCo.png" alt="A man Thinking" />
        </div>
      </section>

      <section className="tech contentWrapper">
        <div>
          <h1></h1>
        </div>
      </section>
    </>
  );
};

export default Home;