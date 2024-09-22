import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p data-testid="test-title">{title}</p>
    </div>
  );
};

export default GifItem;

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
