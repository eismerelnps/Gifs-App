import React from 'react'

function GifsGridItem( {id, title, url} ) {
  return (
    <div className='container-item'>
     <li key={ id } className='container-item__li'> 
                <img className='container-item__img' src={ url.url} alt={title}/>
                <h1>{title} </h1>    
                </li>
    </div>
  )
}

export default GifsGridItem