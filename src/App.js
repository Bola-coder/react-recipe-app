import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import Home from "./components/home.js";
import Bookmark from "./components/Bookmark";
import Navbar from "./components/nav.js";
const App = () => {
  const [liked, setLiked] = useState(() => []);

  const handleLike = (recipe, liked) => {
    const likedArr = [...liked];
    if (!likedArr.includes(recipe)) {
      setLiked((prevState) => [recipe, ...prevState]);
    }
  };

  const handleDelete = (id) => {
    setLiked(liked.filter((item) => item.uri !== id));
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home liked={liked} handleLike={handleLike} />
          </Route>
          <Route path="/bookmark">
            <Bookmark recipes={liked} handleDelete={handleDelete} />
          </Route>
          <Route path="/*">
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
