import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  itemAdded,
  itemRemoved,
} from "../../model/store/cart";
import "../../res/css modules/description_page.scss";

const Input = (props) => {
  const [cartQuantity, setCartQuantity] = useState(1);
  const cartDispatch = useDispatch();
  const [onAdd, setOnAdd] = useState(false);
  const { item } = props;
  //change from add to cart to input
  const handleShowQuantity = () => {
    cartDispatch(itemAdded({ item }));
    cartDispatch(increaseQuantity({ id: item.id }));
    setCartQuantity(1);
    setOnAdd(true);
  };
  //add quantity to cart from input
  const handleSubmit = (form) => {
    form.preventDefault();
    form.target.quantity.blur();
    cartDispatch(increaseQuantity({ id: item.id, quantity: cartQuantity }));
    alert(`${cartQuantity} of ${item.name} added to cart`);
  };

  const handleCartQuantity = async (e) => {
    if (e.target) {
      if (e.target.value === "") {
        setCartQuantity(0);
        return;
      }
      if (e.target.value[0] === "0") {
        e.target.value = e.target.value[1];
      }
    }
    switch (e) {
      case "+":
        setCartQuantity((prevState) => ++prevState);
        cartDispatch(itemAdded({ item }));
        cartDispatch(increaseQuantity({ id: item.id }));
        return;
      case "-":
        if (cartQuantity === 0) return;
        setCartQuantity((prevState) => --prevState);
        cartDispatch(decreaseQuantity({ id: item.id }));
        if (cartQuantity === 1) {
          cartDispatch(itemRemoved({ id: item.id }));
          setOnAdd(false);
        }

        break;

      default:
        setCartQuantity(parseInt(e.target.value));

        break;
    }
  };

  return !onAdd ? (
    <div onClick={handleShowQuantity} className="card_add_to_cart">
      <p>Add To Cart</p>
    </div>
  ) : (
    <div className="qty_price_con item">
      <div className="quantity">
        <div className="minus-con" onClick={() => handleCartQuantity("-")}>
          <i className="fa fa-minus"></i>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input
            type="number"
            name="quantity"
            onChange={handleCartQuantity}
            id=""
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
};

export default Input;
