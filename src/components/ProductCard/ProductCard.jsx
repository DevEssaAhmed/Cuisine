import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
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
    <div>
      <div className='product-card'>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt='iimage'
        />
        <h3>{name}</h3>
        <h4>
          {cuisines.join(", ")}
          {/* {cusines.map((cusine) => {
            return `${cusine}, `  ;
          })} */}
        </h4>
        <h4>{avgRating}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
