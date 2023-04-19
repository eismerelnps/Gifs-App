import React, { useState, useEffect } from "react";

import GifsGridItem from "./GifsGridItem"
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifsGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

  return (
    <>
    <h3> {category}</h3>
    { loading && <p>Loading</p>}
    <div className="container">
     <ol className="container-ol">
        {
            images.map( img => (
                <GifsGridItem 
            key = {img.id}
            {...img}
            />
                ))
            }
           
     </ol>
     
    </div>
    </>
    
  );
};
