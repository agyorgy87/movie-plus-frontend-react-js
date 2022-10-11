import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies.js";
import MyList from "./pages/MyList";

const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/mylist" element={<MyList/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Navigation;
