import React, { useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies.js";
import Search from "./pages/Search.js";
import MyList from "./pages/MyList.js";
import SearchedResult from "./pages/SearchedResult.js";
import SelectedMovie from "./pages/SelectedMovie.js";
import SelectedCollectionMovie from "./pages/SelectedCollectionMovie.js";
import { MovieContext } from "./context/MovieContext.js";
import { CollectionMovieContext } from "./context/CollectionMovieContext";
import { SearchContext } from "./context/SearchContext.js";

const Navigation = () => {

  const [MovieData, setMovieData] = useState({});//kisbetűre!!!
  const [SearchData, setSearchData] = useState({});
  const [CollectionMovieData, setCollectionMovieData] = useState({});

  return (
    <div>
      <MovieContext.Provider value={{value:MovieData, setValue:setMovieData}}>
        <SearchContext.Provider value={{value:SearchData, setValue:setSearchData}}>
          <CollectionMovieContext.Provider value={{value:CollectionMovieData, setValue:setCollectionMovieData}}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/movies" element={<Movies/>} />
                  <Route path="/search" element={<Search/>} />
                  <Route path="/mylist" element={<MyList/>} />
                  <Route path="/searchedresult" element={<SearchedResult/>} />   
                  <Route path="/selectedmovie" element={<SelectedMovie/>} />  
                  <Route path="/selectedcollectionmovie" element={<SelectedCollectionMovie/>} />       
              </Routes>
          </BrowserRouter>
          </CollectionMovieContext.Provider>
        </SearchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}

export default Navigation;
