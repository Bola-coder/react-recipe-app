import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [next, setNext] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetch(url)
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setRecipes(data.hits);
          setNext(data._links.next);
          setLoading(false);
          setError(false);
        }
      })
      .catch((error) => {
        if (error) {
          setLoading(false);
          setError(true);
          if (error.name === "TypeError") {
            setError(
              "OOPS!!! There is an error fetching the Recipes, Please check your internet connection or try refreshing the browser!!!"
            );
          } else {
            setError(error.message);
          }
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { loading, error, recipes, next };
};

export default useFetch;
