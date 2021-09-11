import React, { useState } from "react";
import Recipes from "./Recipes";
// import Pagination from "./Pagination";
import useFetch from ".//useFetch";

const Home = ({ liked, handleLike }) => {
  const APP_ID = "44b9925e";
  const APP_KEY = "0da2e3b050d6ebe7873235cc6651d6ed";
  const [search, setSearch] = useState("");
  const [query, setQeury] = useState("random");
  const url = `https://api.edamam.com/api/recipes/v2/?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const { loading, error, recipes } = useFetch(url);

  const onSearchText = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQeury(search);
    setSearch("");
  };

  return (
    <div className="home">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Search you recipes here"
          value={search}
          onChange={onSearchText}
          autoComplete="true"
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
      <div>
        {loading && (
          <p className="p-text">Loading Recipes..., Please wait!!!</p>
        )}
      </div>
      <div>{error && <p className="p-text">{error}</p>}</div>
      <div>
        {recipes.length <= 0 && (
          <p className="p-text">
            There are no recipes to show at the moment{" "}
            {/*<span>{query}</span>*/} ...
          </p>
        )}
        {/* <p>{liked}</p> */}
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div className="recipe" key={recipe.recipe.uri}>
            <Recipes
              id={recipe.recipe.uri}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              url={recipe.recipe.url}
              liked={liked}
              handleLike={handleLike}
              recipe={recipe.recipe}
            />
          </div>
        ))}
      </div>
      {/* <Pagination next={next.href} link={url} /> */}
    </div>
  );
};

export default Home;
