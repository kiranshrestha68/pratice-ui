import React from "react";
import "./slider.css";
// import ScrollMenu from "react-horizontal-scrolling-menu";
import HorizontalScroll from "react-scroll-horizontal";

// const numberOfPicture = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Slider = () => {
  return (
    <div className="slider">
      {/* <ScrollMenu
        arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
        data={numberOfPicture.map((picture, index) => (
          <img
            style={{ height: "200px" , margin: "20px"}}
            alt="test"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        ))}
      /> */}

      <HorizontalScroll>
        <div className='child'>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Slider;

