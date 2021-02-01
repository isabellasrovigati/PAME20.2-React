import React from "react";

import './styles.css';

function Header({ title }) {
  return (
    <div className="header-column">
      <h2>{title}</h2>
    </div>
  );
}

export default Header;
