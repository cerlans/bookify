import React, {useState} from 'react';
import "./style.css";


export default function App() {
  const [searchString,setString] = useState(' ');
  const [data,setData] = useState([])
  const [query,setQuery] = useState('');

function getData(){
  setQuery(searchString)
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=30&key=AIzaSyCFiBdff1JxkTe4F_0auryiuqiYMIJd48g`)
  .then(function(response){
    return response.json()
  }).then(function(data){
    console.log(data);
    setData(data.items)
  })
 }
 // i have to create a component that will map the above values out, it will be  a sort off 'card' that will dispaly the basic book information and the book thumbnail
 // how do i handle pagination and load more results  in? if you search up  a book you get 20 results back, but not 1k, which is the total amount of results returned
 // i can create a helper function that will break down the author array, the authors property is within an array due to the fact that there can be multiple authors in a book, i need to find out  a way to map out the authors, destructuring? basic mapping like im already doing above?
  return (
    <>
    <div className='heading'>
     <h2>
      You dont need to know the name of the book, if you know the name of the author or publisher, just type, search and find </h2>
    </div>
    <div className='search'>
      <input type='text' placeholder='Type Auther,BookName,ISBN...' onChange = {function(event){
        setString(event.target.value); }}/>
     <button onClick={getData}>Button</button>
      </div>
      <div>
      {data.map(function(value,index){
        return (
          <>
              <div className='bookCard' key={index}>
                    <div className='thumbnail'>
                    <img src={console.log(value.volumeInfo.imageLinks.indexOf)} />
                    </div>
                    <div className='content'>
                      <h2>{value.volumeInfo.title}</h2>
                      <p className='subTitle'> {value.volumeInfo.subtitle}</p>
                      <p>{`Authors: ${value.volumeInfo.authors ? value.volumeInfo.authors:'No author found'}`}</p>
                      <p>{`Publisher: ${value.volumeInfo.publisher ? value.volumeInfo.publisher:'No publisher found'}`}</p>
                      <p>{`Published Date: ${value.volumeInfo.publishedDate ? value.volumeInfo.publishedDate:'No date found'}`}</p>

                    </div>
              </div>
         
          </>
        )
      })}
      </div>
    </>
  )

}
