import React from "react";
import { useDispatch } from "react-redux";
import { itemRemoved } from "../../model/store/cart";

import "../../res/css modules/card.scss";
import CartInput from "./CartInput";

function CartCard({
  img,
  expDate,
  producer,
  strength,
  packsize,
  brand,
  price,
  generic,
  quantity,
  history,
  id,
}) {
  const Dispatch = useDispatch();
  const handleDelCart = () => Dispatch(itemRemoved({ id }));
  return (
    <div>
      <div style={{ width: "95%" }} className="card cart-card">
        <img
          src={img}
          alt="drug"
          onClick={() => history.push("/description")}
        />
        <div className="card_details_con">
          <p className="details_title">{brand}</p>
          <p className="details_generic">{generic}</p>
          <p>{strength}</p>
          <p>X{packsize}</p>
          <p className="details_mfr">{producer}</p>
          <p className="details_exp_date">{expDate}</p>
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
        </div>
        <div className="cart-options">
          <div onClick={handleDelCart} className="cart-delete">
            <i className="fa fa-trash heart"></i>
          </div>
          <p>&#8358;{quantity * price}</p>
          <CartInput id={id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
