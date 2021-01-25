import React, { useEffect, useState } from "react";
import Input from "./input";
import "../../res/css modules/card.scss";
function DrugCard(props) {
  const { img, manufacturer, url, price, name, history, item } = props;
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      const myItem = cart.find(
        (cart_item) => item._id.toString() === cart_item.item._id.toString()
      );
      myItem && setCartQuantity(myItem.item.cart_quantity);
    }
  }, [cartQuantity, item._id]);
  return (
    <div style={{ width: "95%" }} className="card">
      <div className="image_card_con">
        <img
          src={"/get_image/" + url}
          alt="drug"
          onClick={() =>
            history.push({ pathname: "/description", state: item })
          }
        />
      </div>

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
        <Input
          cart="true"
          cart_quantity={cartQuantity}
          isAdded={cartQuantity > 1}
          item={item}
          {...props}
        />
      </div>
    </div>
  );
}

export default DrugCard;
