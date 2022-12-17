import React from "react";
import "./MovieList.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import { useState } from 'react'

const MovieList = () => {
  // const [movieList, setMovieList] = useState('');
  return (
    <div className="movie-list">
      <h2 className="underline">Movies: 2 properties found</h2>

      <div className="movie-list-card">
        <div className="movie-list-card-img item">
          <img
            src="https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
            alt="movie poster"
          />
        </div>
        <div className="movie-list-card-desc item">
          <div className="title-rating left-right spaces">
            <h2>Movie Title</h2>
            <div className="rating">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.4}
                  precision={0.1}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <p className="spaces">
            <AiOutlineCalendar /> 2019
          </p>
          <p className="spaces">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            necessitatibus, soluta molestiae nemo dolorum iure fugit vitae omnis
            illum excepturi ex provident impedit ad. Quam eveniet vero dolor
            deleniti fugit nihil voluptates officia ex.
          </p>
          <p>
            <GrLanguage /> English
          </p>
        </div>
        <div className="movie-list-card-info item">
          <button className="btn-primary">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
