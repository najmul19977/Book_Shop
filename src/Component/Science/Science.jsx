import React from "react";

const Science = ({ item }) => {
  const { title, price, image } = item;
  return (
    <div className=" card text-center mx-auto" data-aos="fade-up-left">
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

export default Science;
