import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import "./style.css";

function Search() {
  const [searchString, setString] = useState(" ");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  let { path, url } = useRouteMatch();
  
  function getData() {
    setLoading(true);
    setQuery(searchString);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=30&key=AIzaSyCFiBdff1JxkTe4F_0auryiuqiYMIJd48g`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data.items);
        setLoading(false);
      });
  }

  // accessibility, runs the getData function upon pressing the enter key
  const getDataEnter = (event) => {
    event.key === "Enter" ? getData() : null;
  };

  return (
    <>
      <div className="heading">
        <h2>
          You dont need to know the name of the book, if you know the name of
          the author or publisher, just type, search and find{" "}
        </h2>
      </div>
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Type Author,BookName,ISBN..."
            onChange={(event) => {
              setString(event.target.value);
            }}
            onKeyPress={getDataEnter}
          />
          <button onClick={getData}>Search Now</button>
        </div>
      </div>
      <div>
      {isLoading ? null :  <div className='searchImage'> 
      <img src="https://i.vgy.me/LjojoY.png" alt="LjojoY.png"/>
      <p>Results will be loaded below</p>
      </div>}
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <div className='booksContainer'>
            {data.map(function (value, index) {
              return (
                <>
                  <div className="bookCard" key={index}>
                    <div className="content">
                      <h2>{value.volumeInfo.title}</h2>
                      <p className="subTitle"> {value.volumeInfo.subtitle}</p>
                      <p>{`Authors: ${
                        value.volumeInfo.authors
                          ? value.volumeInfo.authors
                          : "No author found"
                      }`}</p>
                      <p>{`Publisher: ${
                        value.volumeInfo.publisher
                          ? value.volumeInfo.publisher
                          : "No publisher found"
                      }`}</p>
                      <p>{`Published Date: ${
                        value.volumeInfo.publishedDate
                          ? value.volumeInfo.publishedDate
                          : "No date found"
                      }`}</p>
                      <button
                        className="pageButtons"
                         >
                        <a href={`${value.volumeInfo.previewLink}`} target='_blank'>Read a Sample</a>
                      </button>
                      <Link to={{
                        pathname:`${url}/Book/${value.id}`,
                        state:value.volumeInfo,
                      }}>
                        <button className="pageButtons">View More</button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}


export default Search;
