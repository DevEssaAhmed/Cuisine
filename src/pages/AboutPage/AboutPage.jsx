import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page_details">
        <h1>About Us</h1>
        <p>
          Welcome to Cuisine, the ultimate food delivery experience that brings
          the best local restaurants straight to your doorstep. We know that
          discovering the perfect dining spot in your area can be a hassle,
          which is why we've made it easy for you to explore a diverse range of
          cuisines and find your new favorite spot.
          <br />
          Our app provides you with access to a wide selection of
          freshly-prepared meals from top-rated restaurants in your area. From
          mouthwatering burgers and pizzas to authentic Asian and Mediterranean
          delicacies, there's something for every taste bud. Cuisine's intuitive
          and user-friendly interface makes it simple to browse menus, place
          your order, and track your food's delivery status in real-time.
          <br />
          We partner with local restaurants to provide you with affordable
          pricing and fast, reliable delivery service. So whether you're looking
          for a quick lunch, a romantic dinner for two, or a family feast,
          Cuisine has got you covered. Experience the ultimate food delivery
          experience today and satisfy your cravings with ease!
          <br />
          Cuisine - the ultimate food delivery experience.
        </p>
        <div>
          <button className="btn btn-about">Explore</button>
          <button className="btn btn-outline-about">About Us</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
