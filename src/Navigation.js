import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";

const Navigation = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default Navigation;
