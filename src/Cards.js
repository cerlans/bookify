import React from 'react';

function Cards(props){
  return (
    <>
    <div className='parent'>
  <div className='left'>
    <img src=''/>
  </div>
  <div className='right'>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
 
</div>
    </>
  )
}

export default Cards;