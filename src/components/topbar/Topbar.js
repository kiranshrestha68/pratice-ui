import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  const [isActive, setIsActive] = useState(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setIsActive(false);
  //   } else {
  //     setIsActive(true);
  //   }
  // };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setIsActive(false);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="top" onClose={(e) => setIsActive(false)}>
      <div className="topLeft">
        <i className="topIcon__facebook fab fa-facebook-square" ></i>
        <i className="topIcon__twitter fab fa-twitter-square"></i>
        <i className="topIcon__pinterest fab fa-pinterest-square"></i>
        <i className="topIcon__instagram fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="  topListItem">
            {" "}
            <Link activeClassName="menu_active" className="link" to="/">
              {" "}
              HOME
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link activeClassName="menu_active" className="link" to="/trending">
              {" "}
              TRENDING{" "}
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/latest">
              {" "}
              LATEST{" "}
            </Link>{" "}
          </li>
          <li className="  topListItem">
            {" "}
            <Link className="link" to="/top-rated">
              {" "}
              TOP RATED{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="topRight">
        <input placeholder="Search Movies" className="search-input" />
        <i className="topSearchIcon fas fa-search"></i>

        <div className="dropdown" onMouseLeave={onMouseLeave}>
          <img
            onClick={(e) => setIsActive(!isActive)}
            src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
            alt=""
            className="topImg"
          />
          {isActive && (
            <div className="dropdown__content">
              <div className="dropdown__item__profile">
                <div>
                  <img
                    src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
                    alt=""
                    className="topImg__dropdown"
                  />
                 
                  
                </div>
                <span>KStha_</span>
                  
              </div>
              <div className="dropdown__item"> About </div>
              <div className="dropdown__item"> Testing </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
