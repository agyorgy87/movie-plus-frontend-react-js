import React, { useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies.js";
import Search from "./pages/Search.js";
import MyList from "./pages/MyList.js";
import SearchedResult from "./pages/SearchedResult.js";
import SelectedMovie from "./pages/SelectedMovie.js";
import { MovieContext } from "./context/MovieContext.js";
import { SearchContext } from "./context/SearchContext.js";

const Navigation = () => {

  const [MovieData, setMovieData] = useState({});
  const [SearchData, setSearchData] = useState({});

  return (
    <div>
      <MovieContext.Provider value={{value:MovieData, setValue:setMovieData}}>
        <SearchContext.Provider value={{value:SearchData, setValue:setSearchData}}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/movies" element={<Movies/>} />
                  <Route path="/search" element={<Search/>} />
                  <Route path="/mylist" element={<MyList/>} />
                  <Route path="/searchedresult" element={<SearchedResult/>} />   
                  <Route path="/selectedmovie" element={<SelectedMovie/>} />          
              </Routes>
          </BrowserRouter>
        </SearchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}

export default Navigation;
