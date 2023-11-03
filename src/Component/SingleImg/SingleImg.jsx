import React from "react";
import bg from "../../assets/img/book-cover1.jpg";
import img3 from "./../../assets/img/book-shop2.jpg";
import "./SingleImg.css";
import { Parallax } from "react-parallax";

const SingleImg = () => {
  return (
    <div className="mt-10 mb-20">
      <h2 className="text-5xl font-serif text-center mt-10 mb-10 text-primary">
        Our Cellection
      </h2>
      <Parallax
        bgImage={img3}
        style={{ height: "" }}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: percentage * 500,
              height: percentage * 500,
              transform: "translate(-50%, -50%)", // Center align the content
            }}
          />
        )}
      >
        <div
          className="parallax text-center mx-auto items-center w-full"
          style={{ position: "relative" }}
        >
          <div className="mx-auto items-center justify-center text-center">
            <h2 className="text-2xl text-black font-serif">This is Header Part</h2>
            <p className="text-black font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              atque recusandae corrupti placeat fugit quidem, doloribus vel
              rerum impedit veniam nesciunt ipsum voluptates libero
              reprehenderit consequatur neque nisi sit omnis!
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default SingleImg;
