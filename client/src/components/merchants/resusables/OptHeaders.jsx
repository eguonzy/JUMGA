import React, { useState, useRef } from "react";
import search from "../../../res/images/search.svg";
import add from "../../../res/images/add.svg";
import shop from "../../../res/images/shop.svg";
import { gsap } from "gsap";
function OptHeaders({ title, history, search: isSearch, add: isAdd }) {
  const handleBack = () => history.goBack();
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  const handleShowSearch = () => {
    gsap.to("form", {
      display: "block",
      position: "static",
      width: "75%",
      marginLeft: "7%",
      duration: 0.3,
      right: "1em",
      top: "auto",
      onComplete: () => inputRef.current.focus(),
      opacity: 1,
    });
    gsap.to("img.icon", {
      opacity: 0,
      ease: "linear",
      duration: 0.3,
      onComplete: () => gsap.to("img.icon", { display: "none" }),
    });
  };

  const handleHideSearch = () => {
    gsap.to("form", {
      width: 0,
      opacity: 0,
      duration: 0.3,
      margin: 0,
      onComplete: () => {
        gsap.to("img", { display: "block" });
      },
    });
    gsap.to("img.icon", { opacity: 1, duration: 0.3, delay: 0.3 });
  };
  const handleSearchInput = (e) => setInputText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Oga kpomkpi!");
  };
  return (
    <>
      <div className="header opt">
        <div onClick={handleBack} className="arrow">
          <i className="fa fa-long-arrow-alt-left"></i>
        </div>
        <img className="shop-logo" src={shop} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            value={inputText}
            type="search"
            onChange={handleSearchInput}
          />
          <img
            className="in-form"
            onClick={handleHideSearch}
            src={search}
            alt="search"
          />
        </form>
        {isSearch ? (
          <img
            className="icon"
            onClick={handleShowSearch}
            src={search}
            alt="search"
          />
        ) : (
          ""
        )}
        {isAdd && (
          <img
            onClick={() => history.push("/merchant/additem")}
            className=" add"
            src={add}
            alt="search"
          />
        )}
      </div>
    </>
  );
}

export default OptHeaders;
