import React from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const { back_default, back_shiny, front_default, front_shiny } = sprites;
  return (
    <div style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        <img src={back_default} />
        <img src={back_shiny} />
        <img src={front_default} />
      </div>
    </div>
  );
};
