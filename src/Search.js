import React from 'react';
import React, { useState,useEffect } from 'react';

const Search = function Search(){
   const [searchString,setString] = useState(' ');
  const [data,setData] = useState([])
  const [deep,setDeep] = useState([])
  const [query,setQuery] = useState('');
 useEffect (() => {
fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=20&key=AIzaSyCFiBdff1JxkTe4F_0auryiuqiYMIJd48g`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
   let test = data.items.map(function(value){
     return value.volumeInfo
    })
  return test
  }).then(function(data){
   let componentData = data.map(function(value){
     return value.title;
   })
   return componentData
  }).then(function(data){
    console.log(data);
  })
 },[query]);
function test(){
  console.log(data)
}
  return (
    <>
    <div className='heading'>
     <h2>
      You dont need to know the name of the book, if you know the name of the author or publisher, just type, search and find </h2>
    </div>
    <div className='search'>
      <input type='text' placeHolder='Type Auther,BookName,ISBN...' onChange = {function(event){
        setString(event.target.value); }}/>
      <button onClick={()=> setQuery(searchString)}>Search</button>
      </div>
    </>
  )
}
console.log('tit')
export default Search;