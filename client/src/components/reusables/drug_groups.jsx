import React from "react";
import styles from "../../res/css modules/mart_landing_group.module.scss";
import ph1 from "../../res/images/drug.jpg";
import ph2 from "../../res/images/drug.jpg";
import ph3 from "../../res/images/drug.jpg";
import ph4 from "../../res/images/drug.jpg";
const Groups = (props) => {
  const { title } = props;
  const { drugs } = props;
  //const [first, second, third, fourth] = props.group;
  return (
    <div className={styles.group_parent}>
      <p className={styles.title_parent}>
        <span className={styles.group_title}>{title}</span>
        <span className={styles.more}>
          {" "}
          more{"  "}
          <i
            style={{ marginLeft: "0.3em", color: "inherit" }}
            className="fas fa-caret-right "
          ></i>
        </span>
      </p>
      <div className={styles.group_con}>
        <div className={styles.group_card}>
          <img src={ph1} className={styles.ph} alt="first drug" />
          <p className={styles.drug_tag}>
            {" "}
            <span>{drugs[0].name}</span> <span>&#8358;{drugs[0].price}</span>
          </p>
          <p className={styles.company_tag}>{drugs[0].company}</p>
        </div>
        <div className={styles.group_card}>
          <img src={ph2} className={styles.ph} alt="first drug" />
          <p className={styles.drug_tag}>
            {" "}
            <span>{drugs[1].name}</span> <span>&#8358;{drugs[1].price}</span>
          </p>
          <p className={styles.company_tag}>{drugs[1].company}</p>
        </div>
        <div className={styles.group_card}>
          <img src={ph3} className={styles.ph} alt="first drug" />
          <p className={styles.drug_tag}>
            {" "}
            <span>{drugs[2].name}</span> <span>&#8358;{drugs[2].price}</span>
          </p>
          <p className={styles.company_tag}>{drugs[2].company}</p>
        </div>
        <div className={styles.group_card}>
          <img src={ph4} className={styles.ph} alt="first drug" />
          <p className={styles.drug_tag}>
            {" "}
            <span>{drugs[3].name}</span> <span>&#8358;{drugs[3].price}</span>
          </p>
          <p className={styles.company_tag}>{drugs[3].company}</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
