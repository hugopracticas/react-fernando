import React from "react";
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  const newMessage = {
    message: "Hola mundo",
    title: "Hugo",
  };

  const getName = (nombre) => {
    return `Hola ${nombre}`;
  };
  return (
    <div>
      <h1 data-testid="test-title">{getName("Hugo")}</h1>
      <h2>{title}</h2>
      <p data-testid="test-subtitle">{subTitle}</p>
      <p>{JSON.stringify(newMessage)}</p>
    </div>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  //title: "No hay titulo",
  subTitle: 1590,
};
