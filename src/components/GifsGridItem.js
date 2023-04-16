import React from 'react'

function GifsGridItem( {id, title, url} ) {
  return (
    <div className='animate__wobble'>
     <li key={ id }> 
                <img className='item__img' src={ url.url} alt={title}/>
                <h1>{title} </h1>    
                </li>
    </div>
  )
}

export default GifsGridItem