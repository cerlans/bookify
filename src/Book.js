import React from 'react';
import {useParams} from 'react-router-dom'
function Book(){
    let { id } = useParams();
  console.log(id)
  return (
    <>
    <h1>testing params</h1>
    </>
  )
}


export default Book