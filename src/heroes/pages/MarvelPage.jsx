import React from "react";
import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
