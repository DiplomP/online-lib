import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../homePage/book.jpg";
import "../homePage/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
              
              <Link to="/html">
              <button> Начать </button>
              </Link>
            </div>
        </div>
    );
}

export default Home;