import React from "react";
import "./Searchbox.scss";

const SearchBox = ({ onButtonPress,onSearchChange }) => {

  

  return (
    <>
    <input
      className='search-box'
      type='search'
      placeholder="Search"
      onChange={onSearchChange}
    />
  <button onClick={onButtonPress} >Search</button>
      </>
  );

  }
export default SearchBox;
