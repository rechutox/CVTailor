import React from "react";
import Photo from "./photo";
import SideBlock from "./side_block";
import MainBlock from "./main_block";
import "./scss/app.scss";

export default function({ data }) {
  return (
    <div className="app">
      <div className="side">
        <div className="side-header">
          <Photo src={data.aside.img} alt={data.aside.alt} />
        </div>
        <div className="side-content">
          {data.aside.blocks.map((data, i) => (
            <SideBlock {...data} key={i} />
          ))}
        </div>
      </div>
      <div className="main">
        <div className="main-header">
          <div className="left">
            <Photo src={data.main.img} alt={data.main.alt} />
          </div>
          <div className="right">
            <div className="title">Jesus Veracierta</div>
            <div className="subtitle">Informatics Engineer</div>
          </div>
        </div>
        <div className="content">
          {data.main.blocks.map((data, i) => (
            <MainBlock {...data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
