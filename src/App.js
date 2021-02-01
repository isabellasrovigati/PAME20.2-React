import React from "react";

import Header from "./components/header";
import Main from "./components/main";

import "./globalStyles.css";

function App() {
  return (
    <>
      <div className="header">
        <Header title="Projetos" />
        <Header title="Clientes" />
        <Header title="Calendário" />
        <Header title="Login" />
        <Header title="Contatos" />
      </div>
      <Main
        name="Isabella Santos Rovigati"
        course="Engenharia de Controle e Automação"
        coord="CCE"
        ej="Fluxo"
      />
    </>
  );
}

export default App;
