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
      <h1>{getName("Hugo")}</h1>
      <h2>{title}</h2>
      <p>{subTitle + 1}</p>
      <p>{JSON.stringify(newMessage)}</p>
    </div>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titul",
  subTitle: 1590,
};
