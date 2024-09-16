import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>Gift Expert app</h1>

      <AddCategory
        //setCategories={setCategories}
        onNewCategory={addCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GiftExpertApp;
