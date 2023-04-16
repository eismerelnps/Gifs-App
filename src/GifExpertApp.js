import React, { useState } from "react";
import { AddCattegory } from "./components/AddCattegory";
import { GifsGrid } from "./components/GifsGrid";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["Chipojo Lobaina"]);

  // const handdleAdd = ()  => {
  //setcategories( cats => [...categories, 'Chipojo Segundo']);
  // }

  return (
    <>
      <h2>GifExpertApp2</h2>
      <p>{ useFetchGifs }</p>      
      <AddCattegory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifsGrid
            key={category}
            category={category} />
        ))
        }
      </ol>
    </>
  );
};
