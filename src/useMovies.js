import { useState, useEffect } from "react";

const KEY = "145ba3a3";

export function useMovies(query) {
  const [movies, setMovies] = useState([]); // Initializing a state with a empty array
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      // callback?.(); // optional chaining: this executes when if callback is present then it calls the handleClose functon
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          console.log(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbordError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      // handleCloseMovie(); // coz if we opend some movie and we serched another movie(so now it starts fetches) so before fetching new movie we need to close the current movie.
      fetchMovies();

      // Cleaning up the fetch request( when we have situation of many request has fired off one after another)
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
