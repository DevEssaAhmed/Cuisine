import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import SearchBox from "../SearchBar/SearchBox";
import data from "../../data/data.js";

const ProductList = () => {
  // const [items, setItems] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // useEffect(() => {
  //   {
  //     data.map((item) => {

  //       return setItems(item);

  //     });
  //   }
  // }, []);

  useEffect(() => {
    const newFilteredItems = data.filter((item) => {
      return item.data.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredItems(newFilteredItems);
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

// console.log(filteredItems)


  return (
    <>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search'
        className='kitty-search-box'
      />

      <button type='submit'>Search</button>
      <div className='product-list'>
        {/* {data.map((item) => { */}
        <ProductCard key={filteredItems.data.id} {...filteredItems.data} />;
        {/* })} */}
      </div>
    </>
 )
};

export default ProductList;
