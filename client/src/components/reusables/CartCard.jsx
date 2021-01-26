import React from "react";
import { useDispatch } from "react-redux";
import { itemRemoved } from "../../model/store/cart";
import { loading } from "../../model/store/loader";

import "../../res/css modules/card.scss";
import CartInput from "./CartInput";

function CartCard({
  url,
  name,
  manufacturer,
  price,
  quantity,
  history,
  total,
  item,
  _id: id,
}) {
  const Dispatch = useDispatch();
  const handleDelCart = () => {
    Dispatch(loading());
    Dispatch({
      type: "updateCart",
      payload: {
        item: item.item,
        _id: item.item._id,
        case: "0",
      },
    });
  };
  return (
    <div>
      <div style={{ width: "95%" }} className="card cart-card">
        <img
          src={"/get_image/" + url}
          alt="drug"
          onClick={() => history.push("/description")}
        />
        <div className="card_details_con">
          <p className="details_title">{name}</p>

          <p className="details_mfr">{manufacturer}</p>
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
          <p>&#8358;{total}</p>
          <CartInput item={item.item} id={id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
