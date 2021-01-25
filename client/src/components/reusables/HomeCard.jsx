import React from "react";
import styles from "../../res/css modules/mart_landing_group.module.scss";
import sad from "../../res/images/sad.svg";
function HomeCard({ name, manufacturer, price, url, item, history }) {
  const handleGoToDescription = () =>
    history.push({ pathname: "/description", state: item });
  return (
    <div onClick={handleGoToDescription} className={styles.group_card}>
      <div className={styles.phcon}>
        <img
          src={"/get_image/" + url}
          className={styles.ph}
          alt="failed"
          onError={(e) => {
            e.target.onError = null;
            //e.target.src = sad;
          }}
        />
      </div>
      <p className={styles.drug_tag}> {name}</p>
      <p className={styles.company_tag}>{manufacturer}</p>
      <p className={styles.price}>&#8358;{price}</p>
    </div>
  );
}

export default HomeCard;
