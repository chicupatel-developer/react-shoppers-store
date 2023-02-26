import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import UnAuth from "./components/UnAuth/UnAuth";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/un-auth" element={<UnAuth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
