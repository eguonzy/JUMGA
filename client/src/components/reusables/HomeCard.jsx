import React from "react";
import styles from "../../res/css modules/mart_landing_group.module.scss";
function HomeCard({ name, manufacturer, price, url }) {
  return (
    <div className={styles.group_card}>
      <img src={"/get_image/" + url} className={styles.ph} alt="first drug" />
      <p className={styles.drug_tag}>
        {" "}
        <span>{name}</span> <span>&#8358;{price}</span>
      </p>
      <p className={styles.company_tag}>{manufacturer}</p>
    </div>
  );
}

export default HomeCard;
