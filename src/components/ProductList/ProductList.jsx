import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import ProductCard from "../RestaurantCard/RestaurantCard";
// import data from "../../data/data.js";
import SearchBox from "../SearchBar/SearchBox";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import { swiggy_api_URL } from "../../data/constants";


const filterRestaurants = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};
const ProductList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const onSearchChange = (event) => {
    event.preventDefault();
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchText(searchFieldString);

    // *! This makes search simultaneously
    //  const data = filterRestaurants(searchText, allRestaurants);
    //  setFilteredRestaurants(data);
  };

  const onButtonPress = () => {
    event.preventDefault();
    const data = filterRestaurants(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };
  // ** Cam use optional chaining to not render of can do this
  // *! If there is no data it will not render the component
  // *? Early Return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <SearchBox
        onSearchChange={onSearchChange}
        onButtonPress={onButtonPress}
      />

      <div className='product-list'>
        {filteredRestaurants?.length === 0 ? (
          <h1>No items found for the search term</h1>
        ) : (
          filteredRestaurants.map((item) => {
            return <ProductCard key={item.data.id} {...item.data} />;
          })
        )}
      </div>
    </>
  );
};

export default ProductList;
