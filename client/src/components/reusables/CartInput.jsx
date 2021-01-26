import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  itemAdded,
  itemRemoved,
  increaseQuantity,
  decreaseQuantity,
} from "../../model/store/cart";
import { loading, loadingFinished } from "../../model/store/loader";
import "../../res/css modules/description_page.scss";

function CartInput({ id, quantity, item }) {
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const cartDispatch = useDispatch();
  const [, setOnAdd] = useState(false);

  const handleCartQuantity = async (e) => {
    cartDispatch(loading());
    if (e.target) {
      if (e.target.value === "") {
        setCartQuantity(0);
        cartDispatch(loadingFinished());
        return;
      }
      if (e.target.value[0] === "0") {
        e.target.value = e.target.value[1];
        cartDispatch(loadingFinished());
      }
    }

    switch (e) {
      case "+":
        setCartQuantity((prevState) => ++prevState);
        cartDispatch({
          type: "updateCart",
          payload: {
            item,
            _id: item._id,
            case: "+",
          },
        });
        return;
      case "-":
        if (cartQuantity === 0) {
          cartDispatch(loadingFinished());
          return;
        }
        if (cartQuantity === 1) {
          cartDispatch({
            type: "updateCart",
            payload: {
              item,
              _id: item._id,
              case: "0",
            },
          });
          setOnAdd(false);
          return;
        }
        setCartQuantity((prevState) => --prevState);
        cartDispatch({
          type: "updateCart",
          payload: {
            item,
            _id: item._id,
            case: "-",
          },
        });

        break;

      default:
        cartDispatch(loadingFinished());
        setCartQuantity(parseInt(e.target.value));

        break;
    }
  };
  const handleSubmit = (form) => {
    form.persist();
    form.preventDefault();
    form.target.blur();
    cartDispatch({
      type: "updateCart",
      payload: {
        item,
        _id: item._id,
        case: "+",
        quantity: cartQuantity,
      },
    });
  };

  return (
    <div className="qty_price_con item cart">
      <div className="quantity">
        <div className="minus-con" onClick={() => handleCartQuantity("-")}>
          <i className="fa fa-minus"></i>
        </div>
        <form onSubmit={handleSubmit} action="" method="POST">
          <input
            type="number"
            name="quantity"
            onChange={handleCartQuantity}
            className="quantity_input input"
            value={cartQuantity}
            min="1"
          />{" "}
        </form>
        <div className="plus-con" onClick={() => handleCartQuantity("+")}>
          <i className="fa fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default CartInput;
