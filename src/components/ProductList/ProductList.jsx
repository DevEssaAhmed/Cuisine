import React, { useState } from "react";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../data/data.js";
import SearchBox from "../SearchBar/SearchBox";

const filterRestaurants = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
};
const ProductList = () => {
  const [restaurants, setRestaurants] = useState(data);
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchText(searchFieldString);
  };

  const onButtonPress = () => {
    const data = filterRestaurants(searchText, restaurants);
    setRestaurants(data);
  };

  return (
    <>
      {/* <input
        className='search-box'
        type='search'
        placeholder='Search'
        onChange={onSearchChange}
      />
      <button onClick={() => {
        const data = filterRestaurants(searchText, restaurants);
      setRestaurants(data); }}>
        Search</button> */}

      <SearchBox
        onSearchChange={onSearchChange}
        onButtonPress={onButtonPress}
      />

      <div className='product-list'>
        {restaurants.map((item) => {
          return <ProductCard key={item.data.id} {...item.data} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
