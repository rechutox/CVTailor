import React from "react";
import "./scss/photo.scss";

export default function({ src, alt }) {
  return (
    <div className="photo">
      <img src={src} alt={alt} />
    </div>
  );
}
