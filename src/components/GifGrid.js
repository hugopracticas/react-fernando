import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getData = async () => {
    const getImages = await getGifs(category);
    setImages(getImages);
  };

  useEffect(() => {
    //getGifs(category);
    getData();
    console.log(images);
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.key} {...image} />
        ))}
      </div>
    </div>
  );
};
