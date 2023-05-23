import React, { useState, useEffect } from "react";
import requests from "../request";
const SearchItems = ({ searchTerm }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the API endpoint based on the searchTerm
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?search=${searchTerm}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [searchTerm]);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.description} />
      ))}
    </div>
  );
};

export default SearchItems;
