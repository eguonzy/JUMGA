import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import numberManager from "../../controller/numberManager";
import { hideMenu, showMenu } from "../../model/store/categorymenu";
import styles from "../../res/css modules/bottom_menu.module.scss";
const Bottom_Menu = (props) => {
  const state = useSelector((state) => state.entities);
  const cartCount = state.cart.ids.length;
  const isActive = state.categoryMenu;
  const Dispatch = useDispatch();
  const cartIds = state.cart.ids;
  const cartObject = state.cart.cart;
  let total = 0;
  const handleToCart = () => {
    props.history.push("/cart");
  };
  const handleShowMenu = () => {
    isActive ? Dispatch(hideMenu()) : Dispatch(showMenu());
  };
  try {
    cartIds.forEach(
      (id) => (total += cartObject[id].quantity * cartObject[id].price)
    );
  } catch (error) {
    total = 0;
  }

  return (
    <>
      <div className={styles.menu_items}>
        <Link to="/">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </div>
      <div className={styles.menu_items}>
        <div
          onClick={handleShowMenu}
          style={{ userSelect: "none" }}
          className={"hamburger hamburger--spin " + (isActive && "is-active")}
          typeof="button"
        >
          <div style={{ userSelect: "none" }} className="hamburger-box">
            <div
              style={{ userSelect: "none" }}
              className="hamburger-inner"
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.menu_items} onClick={handleToCart}>
        {cartCount > 0 ? (
          <p className={styles.cart_count}>
            <span style={{ color: "black" }}>{numberManager(cartCount)}</span> |{" "}
            <span> </span>
            <span style={{ color: "white" }}>
              &#8358;{numberManager(total)}
            </span>
          </p>
        ) : (
          <p></p>
        )}
        <i className="fa fa-shopping-cart fa-2x is-active"></i>
      </div>
    </>
  );
};

export default Bottom_Menu;
