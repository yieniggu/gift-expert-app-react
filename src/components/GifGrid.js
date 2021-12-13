import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  console.log(data);

  /**/

  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <h4>{category}</h4>

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
