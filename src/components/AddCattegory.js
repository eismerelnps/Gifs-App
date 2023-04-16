import React, { useState } from "react";

export const AddCattegory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue(" ");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a Gif name"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
        />
      </form>
    </div>
  );
};
