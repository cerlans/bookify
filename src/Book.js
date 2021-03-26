import React from 'react';
import {useParams} from 'react-router-dom'
import {useLocation} from "react-router-dom";
function Book(){
    let { id } = useParams();
     let data = useLocation();
 console.log(data); //state would be in data.state//
  console.log(id)
  return (
    <>
    <h1>testing params</h1>
    </>
  )
}


export default Book