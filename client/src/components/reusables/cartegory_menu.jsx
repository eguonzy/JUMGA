import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { hideMenu, showMenu } from "../../model/store/categorymenu";
import { useDispatch, useSelector } from "react-redux";
import "../../res/css modules/category.scss";
import styles_c from "../../res/css modules/category_menu.module.scss";

const CategoryMenu = (props) => {
  const { items, history } = props;

  let tl = gsap.timeline({ paused: true });
  const Dispatch = useDispatch();
  const isActive = useSelector((state) => state.entities.categoryMenu);
  let [, setIsCategory] = useState(false);
  let [list, setList] = useState([]);

  let con = useRef(null);

  const handleCategorySwitch = async (category, arrg) => {
    if (category === "all") {
      await Dispatch({ type: "apiCallBegan", payload: arrg });
      handleShowMenu();
      reverseTl();
      history.push({
        pathname: "/items",
      });

      return;
    }
    if (arrg) {
      await Dispatch({ type: "apiCallBegan", payload: arrg });
      handleShowMenu();

      await reverseTl();
      history.push("/items");

      return;
    }

    setIsCategory(true);

    //shows the items in a category
    setList(items[category]);
  };
  function handleShowMenu() {
    isActive ? Dispatch(hideMenu()) : Dispatch(showMenu());
  }

  const onSelect = async (category, arrg) => {
    await handleCategorySwitch(category, arrg);

    //animates the menu after selection
    tl.to(".list_con", {
      width: "50%",
      duration: 0.5,
      opacity: 1,
    });
    tl.to(
      ".category_secondary",
      {
        width: "50%",
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.play();
  };
  //reverse the animation
  React.useEffect(() => {
    let header = document.querySelector(".category_secondary");
    let categories = header.getElementsByClassName("category_item");
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener("click", function () {
        let current = header.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }, []);
  const reverseTl = () => {
    let header = document.querySelector(".category_secondary");
    let categories = header.getElementsByClassName("category_item");
    tl.to(".list_con", {
      width: "10%",
      duration: 0.5,
      opacity: 0,
    });
    tl.to(
      ".category_secondary",
      {
        width: "100%",
        duration: 0.5,
        onComplete() {
          for (let i = 0; i < categories.length; i++) {
            categories[i].className = categories[i].className.replace(
              " active",
              ""
            );
          }
        },
      },
      "-=0.5"
    );
    tl.play();
    console.log("called");
  };
  return (
    <div
      ref={con}
      style={{ top: isActive && "0%", display: "none" }}
      className={styles_c.category_menu}
    >
      <div className="category_parent">
        <div onClick={handleShowMenu} className="category_fake"></div>
        <div className="category_main">
          <div className="list_con">
            {Object.keys(list).map((item, index, array) => (
              <div key={index + item} className="category_item_con">
                <p className="category_item">
                  <span
                    onClick={() =>
                      onSelect({ values: list[item], siblings: array }, item)
                    }
                  >
                    {item}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="category_secondary">
            <div className="category_con">
              <div className="category_item_con">
                <p className="category_item">
                  <span onClick={() => onSelect("all")}>All</span>{" "}
                </p>
              </div>
              <div className="category_item_con">
                <p className="category_item">
                  <span onClick={() => onSelect("brands")}>Brands</span>{" "}
                  <i className="fa fa-caret-right"> </i>
                </p>
              </div>
              <div className="category_item_con">
                <p className="category_item">
                  <span onClick={() => onSelect("class")}>Class</span>{" "}
                  <i className="fa fa-caret-right"></i>
                </p>
              </div>
              <div className="category_item_con">
                <p className="category_item">
                  <span onClick={() => onSelect("location")}>Location</span>{" "}
                  <i className="fa fa-caret-right"></i>
                </p>
              </div>
            </div>
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("promos")}>Promos</span>{" "}
              </p>
            </div>
            <div className="category_item_con">
              <p className="category_item">
                <span onClick={() => onSelect("vendors")}>Vendors</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
