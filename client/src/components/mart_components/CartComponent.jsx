import React, { useState } from "react";
import "../../res/css modules/cart.scss";
import norvasc from "../../res/images/smile.svg";
import "../../res/css modules/description_page.scss";
import CartCard from "../reusables/CartCard";
import { useSelector } from "react-redux";
import ItemList from "../reusables/featured_list";
function CartComponent(props) {
  const { cart } = useSelector((state) => state.entities);

  const { history } = props;
  let total = 0;

  const cards = [
    {
      brand: "Lorem",

      image: norvasc,
      price: 1400,

      generic: "ipsum dolor lorem impsum",
    },
    {
      brand: "Lorem",

      image: norvasc,
      price: 1400,

      generic: "ipsum dolor lorem impsum",
    },
    {
      brand: "Lorem",

      image: norvasc,
      price: 1400,

      generic: "ipsum dolor lorem impsum",
    },
    {
      brand: "Lorem",

      image: norvasc,
      price: 1400,

      generic: "ipsum dolor lorem impsum",
    },
    {
      brand: "Lorem",

      image: norvasc,
      price: 1400,

      generic: "ipsum dolor lorem impsum",
    },
  ];
  return (
    <div className="cart_parent">
      {cart.length <= 0 ? (
        <div className="empty_cart">Cart Is Empty</div>
      ) : (
        <>
          <div className="cart_card_con">
            {cart.map((item) => {
              total += parseInt(item.total);
              return (
                <CartCard
                  key={item._id}
                  url={item.item.images[0]}
                  manufacturer={item.item.manufacturer}
                  name={item.item.name}
                  id={item._id}
                  quantity={item.item.cart_quantity}
                  price={item.item.price}
                  total={item.total}
                  {...props}
                  item={item}
                />
              );
            })}
          </div>
          <div
            onClick={() => history.push("/checkout/shipment")}
            className="checkout"
          >
            <p>CHECKOUT &#8358;{parseInt(total)}</p>
          </div>
        </>
      )}
      <div style={{ padding: "0.5em" }}>
        <ItemList title="More By Vendor" cards={cards} />
        <ItemList title="Recently viewed" cards={cards.reverse()} />
      </div>
    </div>
  );
}

export default CartComponent;
