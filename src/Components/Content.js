import "./Content.css";
import { useRef } from "react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Content = ({ search, setSearch }) => {
  const inputRef = useRef("");
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate("/moviesList", { replace: true }),
    [navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }

  return (
    <main>
      <div className="container">
        <div className="form-area">
          <form onSubmit={(e) => handleSubmit(e)}>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <div className="btn-area left-right">
              <button type="submit" className="btn-primary">
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
      </div>
    </main>
  );
};

export default Content;
