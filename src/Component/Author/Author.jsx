import React from "react";
import SingleAuthor from "../SingleAuthor/SingleAuthor";

const Author = () => {
  const author = [
    {
      id: "01",
      name: "Abdhul",
      publish: "2 Published Books",
      image: "https://i.ibb.co/9scXQCc/man-1.jpg",
    },
    {
      id: "02",
      name: "Md:Numan Ahamdad",
      publish: "6 Published Books",
      image: "https://i.ibb.co/rQ3jyTs/man-2.jpg",
    },
    {
      id: "03",
      name: "Md:Rakibul Islam",
      publish: "4 Published Books",
      image: "https://i.ibb.co/SmRh7BK/man-3.jpg",
    },
    {
      id: "04",
      name: "Md:Najmul Kabir",
      publish: "3 Published Books",
      image: "https://i.ibb.co/9scXQCc/man-1.jpg",
    },
    {
      id: "05",
      name: "Md:Nadim Mia",
      publish: "7 Published Books",
      image: "https://i.ibb.co/rQ3jyTs/man-2.jpg",
    },
    {
      id: "06",
      name: "Md:Naibur Rohaman",
      publish: "1 Published Books",
      image: "https://i.ibb.co/SmRh7BK/man-3.jpg",
    },
    {
      id: "07",
      name: "Md:Arafat Islam",
      publish: "3 Published Books",
      image: "https://i.ibb.co/9scXQCc/man-1.jpg",
    },
    {
      id: "07",
      name: "Md:Sha Alom Islam",
      publish: "3 Published Books",
      image: "https://i.ibb.co/rQ3jyTs/man-2.jpg",
    },
  ];
  return (
    <div className="mt-20">
      <h2 className="text-center text-5xl font-serif mt-10 mb-10 text-primary" data-aos="fade-up">Favorite Authors</h2>
      <div className="md:grid grid-cols-4 mx-auto container px-8 py-4 items-center ">
        {author.map((item) => (
          <SingleAuthor key={item.id} item={item}></SingleAuthor>
        ))}
      </div>
    </div>
  );
};

export default Author;
