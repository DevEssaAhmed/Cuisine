import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductCard from "../ProductCard/ProductCard";
// import data from "../../data/data.js";
import SearchBox from "../SearchBar/SearchBox";
import { swiggy_api_URL } from "../../data/constants";

const filterRestaurants = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
};
const ProductList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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
