import React, { useState } from "react";

function NavBar(props) {
  const [isActive, setIsActive] = useState(false);
  const handleShowMenu = () =>
    isActive ? setIsActive(false) : setIsActive(true);

  return (
    <div className="header">
      <div className="logo_con">
        <p>Jumga</p>
      </div>
      <div
        onClick={handleShowMenu}
        style={{ userSelect: "none" }}
        className={"hamburger hamburger--spin " + (isActive && "is-active")}
        typeof="button"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
