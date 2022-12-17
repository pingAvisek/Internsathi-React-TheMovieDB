import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Fetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const dataFetchedRef = useRef(false);
  let APIKEY = "5499e4e";
  let title = "Bad Boys";

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch(`https://www.omdbapi.com/?t=${title}&apikey=${APIKEY}&plot=full`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(result.Title);
          console.log(result.Year);
          console.log(result.Plot);
          console.log(result.imdbRating);
          console.log(result.Country);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div className="container">
        <h2 style={{ color: "#ff0000" }}>Sorry, can't retrive data!</h2>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="container">
        <h3 style={{ color: "var(--primary-color)" }}>
          Waiting for data to be fetched...
        </h3>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2 style={{ color: "green" }}>Data Loaded Successfully</h2>
      </div>
    );
  }
};

export default Fetch;
