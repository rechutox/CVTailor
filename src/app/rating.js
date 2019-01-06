import React from "react";
import Icon from "./icon";
import "./scss/rating.scss";

export default function({ value }) {
  let result = [];
  for (let i = 0; i < 5; i++)
    if (i < value) result.push(<Icon icon="star" key={i} />);
    else result.push(<Icon icon="star-o" key={i} />);
  return <div className="rating">{result}</div>;
}
