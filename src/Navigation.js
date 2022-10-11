import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies.js";
import MyList from "./pages/MyList.js";
import SearchedResult from "./pages/SearchedResult.js";
import SelectedMovie from "./pages/SelectedMovie.js";

const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/mylist" element={<MyList/>} />
                <Route path="/searchedresult" element={<SearchedResult/>} />   
                <Route path="/selectedmovie" element={<SelectedMovie/>} />          
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Navigation;
