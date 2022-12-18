import React from "react";
import "./MoviesList.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ search }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const dataFetchedRef = useRef(false);
  let APIKEY = "5499e4e";
  let userTitle = search;

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch(`https://www.omdbapi.com/?s=${userTitle}&apikey=${APIKEY}`)
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          // console.log(result.Search.length);
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
    if (items.Response === "True" && items.Search.length > 0) {
      return items.Search.map((result, i) => {
        return (
          <div className="container movies-list spaces" key={i}>
            <h3 className="spaces">{result.Title}</h3>
            <p className="spaces">Year: {result.Year}</p>
            <p className="spaces">imdbID: {result.imdbID}</p>
            <Link to="/movieCard" state={{ id: result.imdbID }}>
              <button className="btnPrimary">See More</button>
            </Link>
          </div>
        );
      });
    } else {
      return (
        <div className="container left-right">
          <h2 style={{ color: "#ff0000" }}>Sorry, No related data found!</h2>
          <Link to="/">
            <button className="btnPrimary">Go Back</button>
          </Link>
        </div>
      );
    }
  }
};

export default MoviesList;
