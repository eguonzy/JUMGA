import React from "react";
import { loading, loadingFinished } from "../../model/store/loader";
import { getItemsList } from "../../model/store/category";
import { useSelector } from "react-redux";
import styles from "../../res/css modules/bottom_menu.module.scss";
function Loader(props) {
  const state = useSelector((state) => state);
  const isLoading = state.entities.loader;
  return (
    <div
      style={{ display: isLoading ? "flex" : "none" }}
      className={styles.loader}
      onScroll={(e) => e.preventDefault()}
    >
      <div className={styles.loadingIcon}></div>
    </div>
  );
}

export default Loader;
