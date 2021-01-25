import React from "react";
import styles from "../../res/css modules/mart_landing_group.module.scss";
import HomeCard from "./HomeCard";
const Groups = ({ items = [], title, history }) => {
  const handleCategory = () =>
    history.push({
      pathname: "/itemslist",

      state: { title: title.toLowerCase() },
    });

  return (
    <div className={styles.group_parent}>
      <p className={styles.title_parent}>
        <span className={styles.group_title}>{title}</span>
        <span onClick={handleCategory} className={styles.more}>
          {" "}
          more{"  "}
          <i
            style={{ marginLeft: "0.3em", color: "inherit" }}
            className="fas fa-caret-right "
          ></i>
        </span>
      </p>
      <div className={styles.group_con}>
        {items.map((item) => {
          const { name, manufacturer, price, images, _id } = item;
          return (
            <HomeCard
              key={_id}
              name={name}
              manufacturer={manufacturer}
              price={price}
              url={images[0]}
              item={item}
              history={history}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Groups;
