import React, { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// Here is your key: dfd2f984
//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=dfd2f984

const API_URL = "http://www.omdbapi.com?apikey=dfd2f984";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("The Matrix");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value="Superman"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
export default App;
