import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav>
            <div className="container left-right">
                <div className="logo-container">
                    <Link to="#">
                        <h1 style={{
                            userSelect: "none",
                            cursor: "pointer"
                        }}>The MovieDB</h1>
                    </Link>
                </div>
                <div className="nav-links">
                    <a href="https://github.com/pingAvisek/internsathi-react-TheMovieDB"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
