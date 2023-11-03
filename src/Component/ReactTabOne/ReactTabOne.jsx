import React from "react";
import "./ReactTabOne.css";

const ReactTabOne = ({ item }) => {
  const { image, price, title } = item;
  return (
    <div className=" card text-center mx-auto" data-aos="fade-right">
      <div className="cards">
        <div>
          <img className="mx-auto" src={image} alt="" />
        </div>
        <div className="font-serif text-xl">
          <p>{title}</p>
          <p>Price: {price}</p>
        </div>
      </div>
      <div className=" btns mt-2">
        <button className="btn btn-primary ">Add To Card</button>
      </div>
    </div>
  );
};

export default ReactTabOne;
