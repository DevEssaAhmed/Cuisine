import React from "react";
import "./Searchbox.scss";

const SearchBox = ({ onButtonPress,onSearchChange }) => {

  

  return (
    <div className="search-container">
      <input
        className='search-box'
        type='search'
        placeholder='Search'
        onChange={onSearchChange}
      />
      <button className="search-button" onClick={onButtonPress}>
        <i className='fa fa-search'></i>
      </button>
    </div>
  );

  }
export default SearchBox;
