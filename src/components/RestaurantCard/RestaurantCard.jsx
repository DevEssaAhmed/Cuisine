import React from "react";
import "./RestaurantCard.scss";
import { IMG_CDN_URL } from "../../data/constants";

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = props;

  // const Products = {
  //   name: "Burger",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/640px-Hamburger_%28black_bg%29.jpg",
  //   cusines: ["Burger King", "KFC"],
  //   rating: "4.2",
  // };

  // const ProductCard = () => {
  //   const { name, image, cusines, rating } = Products;

  return (
    <div className="restaurant-card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{area}</h5>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
