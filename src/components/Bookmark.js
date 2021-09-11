import React from "react";
import "./Bookmark.css";

const Bookmark = ({ recipes, handleDelete }) => {
  return (
    <div>
      <h2 className="bookmark-text">Bookmarked Recipes</h2>
      <br />
      {recipes.length <= 0 ? (
        <p>No bookmarked recipes</p>
      ) : (
        <p>{`${recipes.length} bookmarked recipes`}</p>
      )}
      <div className="bookmarks">
        {recipes.length > 0 &&
          recipes.map((recipe) => {
            return (
              <div className="bookmark" key={recipe.uri}>
                <h4 className="bookmark-title">
                  {recipe.label < 30
                    ? recipe.label
                    : recipe.label.slice(0, 30) + "..."}
                </h4>
                <img src={recipe.image} alt="" className="bookmark-image" />
                <p className="bookmark-link">View recipe</p>
                <button
                  className="bookmark-btn"
                  onClick={() => handleDelete(recipe.uri)}>
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Bookmark;
