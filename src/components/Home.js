import '../css/Home.css'
import * as React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";

const Home = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home