import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "./style.css";


export default function App() {
  const [searchString,setString] = useState(' ');
  const [data,setData] = useState([]);
  const [query,setQuery] = useState('');
  const [isLoading,setLoading] = useState(false);
  const history = useHistory();

function getData(){
  setLoading(true);
  setQuery(searchString)
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=30&key=AIzaSyCFiBdff1JxkTe4F_0auryiuqiYMIJd48g`)
  .then(function(response){
    return response.json()
  }).then(function(data){
    setData(data.items);
    setLoading(false);
  })
 }
 function reet(){
   history.push('/Books')
 }
 // accessibility, runs the getData function upon pressing the enter key
const getDataEnter = (event) => {event.key === 'Enter' ? getData() : null};

  return (
    <>
    <div className='heading'>
     <h2>
      You dont need to know the name of the book, if you know the name of the author or publisher, just type, search and find </h2>
    </div>
    <div className='search'>
      <div>
      <input type='text' placeholder='Type Author,BookName,ISBN...' onChange = {(event) => {setString(event.target.value); }} onKeyPress={getDataEnter}/>
     <button onClick={getData}>Search Now</button>
       </div>
      </div>
      <div>
      {isLoading ? (<div className='spinner'></div>) : (<div>
      {data.map(function(value,index)
      {
           return (
          <>
            <div className='bookCard' key={index}>
                    <div className='thumbnail'>
                   <img src={value.volumeInfo.imageLinks.smallThumbnail} />
                    </div>
                    <div className='content'>
                      <h2>{value.volumeInfo.title}</h2>
                      <p className='subTitle'> {value.volumeInfo.subtitle}</p>
                      <p>{`Authors: ${value.volumeInfo.authors ? value.volumeInfo.authors:'No author found'}`}</p>
                      <p>{`Publisher: ${value.volumeInfo.publisher ? value.volumeInfo.publisher:'No publisher found'}`}</p>
                      <p>{`Published Date: ${value.volumeInfo.publishedDate ? value.volumeInfo.publishedDate:'No date found'}`}</p>
                      <button className='pageButtons'>Read a Sample</button>
                      <button className='pageButtons' onClick={reet}>View More</button>
                    </div>
            </div>
          </>
        )
      })}
      </div>)
      }
      </div>
    </>
  )
}
/*
(isLoading) ? 'display this dummy spinner': 'display the true content'

{data.map(function(value,index){
        return (
          <>
            
              <div className='bookCard' key={index}>
                    <div className='thumbnail'>
                   
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
*/