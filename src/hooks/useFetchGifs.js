import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const getImages = await getGifs(category);
    setImages(getImages);
    setIsLoading(false);
  };

  useEffect(() => {
    //getGifs(category);
    getData();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
