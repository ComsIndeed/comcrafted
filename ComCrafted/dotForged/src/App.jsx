import { useState } from "react";

function App() {
  return (
    <>
      <NavigationBar header="dotForge" />

      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  );
}

function NavigationBar(props) {
  return (
    <>
      <div className="navBar">
        <h1 id="header"> {props.header} </h1>
      </div>
    </>
  );
}

function CardContainer(props) {
  return (
    <>
      <div className="card-container">{props.children}</div>
    </>
  );
}

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-icon" />
        <div className="card-info">
          <h3 className="card-header">Title</h3>
          <p className="card-overview">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            voluptas consequatur labore consequuntur sit fugiat ipsam rerum
            beatae odit iusto deserunt eaque officia molestias pariatur, quas
            corporis similique assumenda perspiciatis!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
