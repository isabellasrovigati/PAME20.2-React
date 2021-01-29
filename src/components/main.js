import React from "react";
import List from "./list";
import Grid from "./grid";

function Main({ name, ej, coord, course }) {
  return (
    <div className="main">
      <h3>Meu calendário</h3>
      <div className="main-header">
        <div>
          <h4>{name}</h4>
          <h4>{course}</h4>
        </div>
        <h4>
          {ej} / {coord}
        </h4>
      </div>
      <div className="main-container">
        <Grid />
        <List
          class1="Capacitação HTML/CSS"
          class2="Capacitação Intro web"
          class3="Capacitação SCRUM"
          class4="Entrega 1"
          class5="Enetrega 2"
          prof1="Isa"
          prof2="Bruno"
          prof3="Ruth"
          prof4="Candidatos"
          prof5="Candidatos"
        />
      </div>
    </div>
  );
}

export default Main;
