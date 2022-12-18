import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import MoviesList from "./Components/MoviesList";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="App">
        <NavBar title="The MovieDB" />
        <Routes>
          <Route
            path="/"
            element={<Content search={search} setSearch={setSearch} />}
          />

          <Route
            path="/moviesList"
            element={<MoviesList search={search} setSearch={setSearch} />}
          />
          <Route path="/movieCard" element={<MovieCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
