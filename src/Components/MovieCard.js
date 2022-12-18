import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import "./MovieCard.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";

const MovieCard = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();
  const dataFetchedRef = useRef(false);

  const { id } = location.state;
  const APIKEY = "5499e4e";

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="movie-list-card container">
      <div className="movie-list-card-img item">
        <img src={data.Poster} alt="movie poster" />
      </div>
      <div className="movie-list-card-desc item">
        <div className="title-rating left-right spaces">
          <h2>{data.Title}</h2>
        </div>
        <p className="spaces">
          <AiOutlineCalendar /> {data.Released}
        </p>
        <p className="spaces">{data.Plot}</p>
        <p>
          <GrLanguage /> {data.Country}
        </p>
      </div>
      <div className="movie-list-card-info item">
        <Link to={"/"}>
          <button className="btn-primary">Back to Home</button>
        </Link>

        <Link to={"/moviesList"}>
          <button className="btn-secondary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
