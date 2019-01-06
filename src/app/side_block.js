import React from "react";
import Icon from "./icon";
import Rating from "./rating";
import "./scss/side_block.scss";

export default function({ type, title, items }) {
  let content;
  switch (type) {
    case "aside-icon-text":
      content = items.map((data, i) => (
        <div className="item-icon-text">
          <Icon icon={data.icon} />
          <div className="body">
            <div className="title">
              <strong>{data.title}</strong>
            </div>
            {data.link ? (
              <a href={data.link}>{data.text}</a>
            ) : (
              <div>{data.text}</div>
            )}
          </div>
        </div>
      ));
      break;
    case "aside-rating":
      content = items.map((data, i) => (
        <div className="item-rating">
          <div className="body">
            <div className="title">
              <strong>{data.title}</strong>
            </div>
          </div>
          <Rating value={data.value} />
        </div>
      ));
      break;
    case "aside-columns":
      content = (
        <div className="item-columns">
          {items.map((data, i) => (
            <div className="cell">{data}</div>
          ))}
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <div className="side_block">
      <div className="header">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
}
