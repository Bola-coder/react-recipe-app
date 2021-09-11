import React from "react";
import "./Recipe.css";
const Recipes = ({ title, image, calories, liked, handleLike, recipe }) => {
  return (
    <div className="">
      <h2 className="recipe-title">
        {title.length < 30 ? title : `${title.slice(0, 30)}...`}
      </h2>
      {/* <p className="recipe-calorie">Calories: {calories}</p> */}
      <img src={image} alt="" className="recipe-image" />
      <p className="recipe-link">View recipe</p>
      <button
        className="recipe-like-btn"
        onClick={() => handleLike(recipe, liked)}>
        Bookmark Recipe
      </button>
    </div>
  );
};

export default Recipes;
