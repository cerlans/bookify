import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Book() {
  let { id } = useParams();
  let data = useLocation();
  console.log(data); //state would be in data.state//

  return (
    <>
      <div className="bookDemo">
        <div className="bookDetails">
          <h1>{data.state.title}</h1>
          <div>
            <ul>
              <li>Authors: {data.state.authors.join()}</li>
              <li>{`Publisher: ${data.state.publisher}`}</li>
              <li>{`Date of Publication: ${data.state.publishedDate}`}</li>
              <li>{`Number of Pages: ${data.state.pageCount}`}</li>
            </ul>
          </div>
        </div>
        <div className="bookDescription">
          <h1>Description</h1>
          <p>{data.state.description}</p>
          <div className="sampleButtons">
            <button>
              <a href={`${data.state.infoLink}`} target="_blank">
                Buy This Book
              </a>
            </button>
            <button>
              <a href={`${data.state.previewLink}`}>Free Sample</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;