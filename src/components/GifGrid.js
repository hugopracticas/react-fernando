import React, { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  /**
   * Solucion sin custom hook
   */
  /*const [images, setImages] = useState([]);

  const getData = async () => {
    const getImages = await getGifs(category);
    setImages(getImages);
  };

  useEffect(() => {
    //getGifs(category);
    getData();
    console.log(images);
  }, []);*/

  return (
    <div>
      <h3>{category}</h3>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
