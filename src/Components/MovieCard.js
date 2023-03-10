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
  {
    console.log(data);
  }

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
      <div className="movie-list-card container">
        <div className="movie-list-card-img item">
          <img src={data.Poster} alt="Opps! Can't fetch image URL" />
        </div>
        <div className="movie-list-card-desc item">
          <div className="title-rating spaces">
            <h2 className="spaces">{data.Title}</h2>
            <p className="spaces">
              <b>Cast Members: </b>
              {data.Actors}
            </p>
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
  }
};

export default MovieCard;
