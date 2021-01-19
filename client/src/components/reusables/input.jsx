import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  itemAdded,
  itemRemoved,
} from "../../model/store/cart";
import "../../res/css modules/description_page.scss";

const Input = (props) => {
  const [cartQuantity, setCartQuantity] = useState(props.cart_quantity);
  const isAdded = props.cart_quantity > 1;
  console.log(isAdded);
  const cartDispatch = useDispatch();
  const [onAdd, setOnAdd] = useState(false);
  const { item } = props;

  useEffect(() => {
    setCartQuantity(props.cart_quantity);
    setOnAdd(props.isAdded);
  }, [props.cart_quantity, props.isAdded]);

  const handleShowQuantity = () => {
    // cartDispatch(itemAdded({ item }));
    cartDispatch({
      type: "getCart",
      payload: { item, cart_quantity: 1, _id: item._id },
    });
    setCartQuantity(1);
    setOnAdd(true);
  };
  //add quantity to cart from input
  const handleSubmit = (form) => {
    form.preventDefault();
    form.target.quantity.blur();
    cartDispatch({
      type: "updateCart",
      payload: {
        item,
        quantity: parseInt(form.target.quantity.value),
        _id: item._id,
        case: "+",
      },
    });
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
        //  cartDispatch(itemAdded({ item }));
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
        if (cartQuantity === 0) return;
        setCartQuantity((prevState) => --prevState);
        cartDispatch({
          type: "updateCart",
          payload: {
            item,
            _id: item._id,
            case: "-",
          },
        });
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
        }

        break;

      default:
        setCartQuantity(parseInt(e.target.value));

        break;
    }
  };

  return !onAdd ? (
    <div onClick={handleShowQuantity} className="card_add_to_cart add_to_cart">
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
