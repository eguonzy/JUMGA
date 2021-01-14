import React from "react";
import Input from "./input";
import "../../res/css modules/card.scss";
function DrugCard(props) {
  const {
    img,
    expDate,
    producer,
    strength,
    packsize,
    brand,
    formulation,
    item,
    price,
    generic,
    history,
  } = props;
  return (
    <div style={{ width: "95%" }} className="card">
      <img src={img} alt="drug" onClick={() => history.push("/description")} />
      <div className="card_details_con">
        <p className="details_title">
          {formulation.slice(0, 3)} {brand}
        </p>
        <p className="details_generic">{generic}</p>
        <p>
          {strength} X{packsize}{" "}
        </p>
        <p className="details_mfr">{producer}</p>
        <p className="details_exp_date">{expDate}</p>{" "}
        <p>
          <i className="fas fa-star star" />
          <i className="fas fa-star star" />
          <i className="fas fa-star star" />
          <i className="far fa-star star" />
          <i className="far fa-star star" />
        </p>
        <div className="price_rating">
          <i className="far fa-heart fa-lg heart"></i>
          <p className="price">&#8358;{price}</p>
        </div>
        <Input cart="true" item={item} />
      </div>
    </div>
  );
}

export default DrugCard;
