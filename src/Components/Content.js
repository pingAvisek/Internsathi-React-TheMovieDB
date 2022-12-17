import React from "react";
import "./Content.css";
import { useRef } from "react";
import { useState } from "react";
import MovieList from "./MovieList";

const Content = () => {
  const [title, setTitle] = useState("");
  const inputRef = useRef("");
  return (
    <main>
      <div className="container">
        <div className="form-area">
          <form>
            <label htmlFor="title-of-the-movie" id="user-title">
              Title of the Movie:
            </label>
            <input
              type="text"
              id="title-of-the-movie"
              name="title-of-the-movie"
              placeholder="Enter movie's title"
              minLength={3}
              autoFocus={true}
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <div className="btn-area left-right">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (title.length < 3) {
                    return;
                  }
                  setTitle("");
                }}
                type="submit"
                className="btn-primary"
              >
                Search
              </button>
              <button
                onClick={() => inputRef.current.focus()}
                className="btn-secondary"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        <MovieList />
      </div>
    </main>
  );
};

export default Content;
