import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [next, setNext] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setRecipes(data.hits);
        setNext(data._links.next);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        // console.log(error.name);
        if (error) {
          setLoading(false);
          setError(true);
          if (error.name === "TypeError") {
            setError(
              "OOPS!!! There is an error fetching the Recipes, Please try refreshing the browser!!!"
            );
          } else {
            setError(error.message);
          }
        }
      });
  }, [url]);

  return { loading, error, recipes, next };
};

export default useFetch;
