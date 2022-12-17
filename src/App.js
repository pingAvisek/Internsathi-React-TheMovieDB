import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Fetch from "./Components/Fetch";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Content fetch={fetch} />

        <Fetch />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
