import React from "react";
import "./ReactTabTwo.css";

const ReactTabTwo = ({ view }) => {
  const { title, price, image } = view;
  return (
    <div className=" card text-center mx-auto" data-aos="fade-up-right">
      <div className="cards">
        <div>
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div className="text-xl font-serif">
          <p>{title}</p>
          <p>Price :{price}</p>
        </div>
      </div>
      <div className="btns mt-2">
        <button className="btn btn-primary">Add To Card</button>
      </div>
    </div>
  );
};

export default ReactTabTwo;
