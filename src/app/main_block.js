import React from "react";
import Icon from "./icon";
import "./scss/main_block.scss";

export default function({ type, title, icon, body, items }) {
  let content;
  switch (type) {
    case "main-text":
      content = <div className="main-text">{body}</div>;
      break;
    case "main-timeline":
      content = items.map((data, i) => (
        <div className="item-timeline" key={i}>
          <div className="title">{data.title}</div>
          <div className="subtitle">{data.subtitle}</div>
          <div className="date">{data.year}</div>
          <div className="body">{data.body}</div>
        </div>
      ));
      break;
    default:
      break;
  }
  return (
    <div className="main_block">
      <div className="header">
        <Icon icon={icon} />
        <div className="title">{title}</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
