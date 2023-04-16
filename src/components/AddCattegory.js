import React, { useState } from "react";

export const AddCattegory = ( {setCategories} ) => {
  const [inputValue, setInputValue] = useState('WriteCategory');
  
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };



  const handleCleanInputValue = () => {
    setInputValue(" ");
  };




  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 2){
        setCategories( cats => [inputValue, ...cats ]);
        setInputValue(' ')
    }

  };

  return (
    <div className = "form">
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={inputValue}
         // onClick={handleCleanInputValue}
          onChange={handleInputValue}
         />
      </form> 
    </div>
  );
};
   