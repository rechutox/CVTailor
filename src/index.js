//-------------------------------------------------------------------
//-------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import "./styles.css";
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function BigPhoto({ className = "", src }) {
  return (
    <figure className={"BigPhoto " + className}>
      <img src={src} alt="Jesus Veracierta" />
    </figure>
  );
}
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function MainHeader({ title, subtitle }) {
  return (
    <header className="MainHeader">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </header>
  );
}

function MainTitle({ icon, children }) {
  return (
    <h3 className="MainTitle">
      <FAIcon icon={icon} />
      <span>{children}</span>
    </h3>
  );
}

function MainText({ className, children }) {
  return <article className={"MainText " + className}>{children}</article>;
}

function MainBlock({ type, icon, title, body, items }) {
  let blocks;
  switch (type) {
    case "main-text":
      blocks = <MainText>{body}</MainText>;
      break;
    case "main-timeline":
      blocks = (
        <table className="table-timeline">
          <tbody>
            {items.map((data, i) => (
              <tr key={i}>
                <td />
                <td className="only-desktop">{data.year}</td>
                <td>
                  <div className="title">{data.title}</div>
                  <div className="subtitle">{data.subtitle}</div>
                  <div className="subtitle only-mobile">{data.year}</div>
                  <div className="content">{data.body}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
      break;
    default:
      break;
  }
  return (
    <article className="MainBlock">
      <MainTitle icon={icon}>{title}</MainTitle>
      {blocks}
    </article>
  );
}
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function FAIcon({ icon }) {
  switch (icon.constructor.name) {
    case "String":
      return <i className={"FAIcon icon fa fa-fw fa-" + icon} />;
    case "Array":
      return (
        <i className="fa fa-stack">
          {icon.map((i, k) => (
            <i className={"FAIcon icon fa fa-fw fa-" + i} key={k} />
          ))}
        </i>
      );
    default:
      return null;
  }
}
function FAIconCircle({ icon }) {
  return (
    <i className="FAIcon fa fa-stack">
      <i className={"circle fa fa-circle-o"} />
      <i className={"icon fa fa-" + icon} />
    </i>
  );
}
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function AsideTitle({ children }) {
  return <h4 className="AsideTitle">{children}</h4>;
}

function AsideText({ icon, children }) {
  const iconFA = icon ? <FAIcon icon={icon} /> : null;
  return (
    <article className="AsideText">
      {iconFA}
      <div>{children}</div>
    </article>
  );
}

function AsideRating({ title, value }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < value) stars.push(<FAIcon icon="star" key={i} />);
    else stars.push(<FAIcon icon="star-o" key={i} />);
  }
  return (
    <article className="AsideRating">
      <strong>{title}</strong>
      <div>{stars}</div>
    </article>
  );
}

function AsideColumns({ title, items = [] }) {
  return (
    <article className="AsideColumns">
      {items.map((text, i) => (
        <div key={i}>{text}</div>
      ))}
    </article>
  );
}

function AsideBlock({ type, title, items }) {
  let blocks;
  switch (type) {
    case "aside-icon-text":
      blocks = items.map((data, i) => (
        <AsideText icon={data.icon} key={i}>
          <strong>{data.title}</strong>
          <a href="{data.link}" target="_blank">
            {data.text}
          </a>
        </AsideText>
      ));
      break;
    case "aside-rating":
      blocks = items.map((data, i) => <AsideRating {...data} key={i} />);
      break;
    case "aside-columns":
      blocks = <AsideColumns title={title} items={items} />;
      break;
    default:
      break;
  }
  return (
    <article className="AsideBlock">
      <AsideTitle>{title}</AsideTitle>
      {blocks}
    </article>
  );
}
//-------------------------------------------------------------------
//-------------------------------------------------------------------
function App({ data = {} }) {
  let asideBlocks = data.aside.blocks.map((data, i) => (
    <AsideBlock {...data} key={i} />
  ));
  let mainBlocks = data.main.blocks.map((data, i) => (
    <MainBlock {...data} key={i} />
  ));
  return (
    <section className="App">
      <aside className="Aside">
        <BigPhoto className="only-desktop" src={data.aside.img} />
        {asideBlocks}
      </aside>
      <section className="Main">
        <BigPhoto className="main only-mobile" src={data.aside.img} />
        <MainHeader title={data.main.title} subtitle={data.main.subtitle} />
        {mainBlocks}
      </section>
    </section>
  );
}

ReactDOM.render(<App data={data} />, document.getElementById("root"));
