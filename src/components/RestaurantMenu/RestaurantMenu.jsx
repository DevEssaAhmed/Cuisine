import React, { useState, useEffect } from "react";
import './RestaurantMenu.scss'
import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../../data/constants";
import { MenuShimmer } from "../ShimmerUI/ShimmerUI";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();
      console.log(json.data);
      setRestaurant(json?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className='restaurant-menu'>
      <div className='restaurant-summary'>
        <img
          className='restaurant-img'
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className='restaurant-summary-details'>
          <h2 className='restaurant-title'>{restaurant?.name}</h2>
          <p className='restaurant-tags'>{restaurant?.cuisines.join(", ")}</p>
          <div className='restaurant-details'>
            <div
              className='restaurant-rating'
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className='fa-solid fa-star'></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div>|</div>
            <div>{restaurant?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className='restaurant-menu-content'>
        <div className='menu-items-container'>
          <div className='menu-title-wrap'>
            <h3 className='menu-title'>Recommended</h3>
            <p className='menu-count'>
              {Object.keys(restaurant?.menu?.items).length} ITEMS
            </p>
          </div>
          <div className='menu-items-list'>
            {Object.values(restaurant?.menu?.items).map((item) => (
              <div className='menu-item' key={item?.id}>
                <div className='menu-item-details'>
                  <h3 className='item-title'>{item?.name}</h3>
                  <p className='item-cost'>
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "PKR",
                        }).format(item?.price / 100)
                      : " "}
                     
  //! {/*  This code is using the Intl.NumberFormat constructor to format a number as a currency string in Indian English format. The resulting currency string is then divided by 100 before being returned.
Here's a breakdown of the code:

new Intl.NumberFormat("en-IN", { ... }): This creates a new Intl.NumberFormat object for the Indian English locale. The object is configured with a style of "currency" and a currency of "PKR", which specifies that the currency should be formatted as Pakistani rupees.

.format(item?.price / 100): This method is called on the Intl.NumberFormat object and takes the item.price property as an argument. The ? operator is used to make sure that the code doesn't throw an error if item is undefined or null.

/ 100: This divides the resulting currency value by 100. This is presumably done to convert the currency value from a cent-based representation to a unit-based representation (i.e., dividing by 100 converts 100 cents to 1 unit of currency).

: " ": This is a ternary operator that returns a space character if the item.price property is undefined or null. */}



                  </p>
                  <p className='item-desc'>{item?.description}</p>
                </div>
                <div className='menu-img-wrapper'>
                  {item?.cloudinaryImageId && (
                    <img
                      className='menu-item-img'
                      src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                      alt={item?.name}
                    />
                  )}
                  <button className='add-btn'> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
