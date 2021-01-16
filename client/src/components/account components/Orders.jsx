import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { account } from "../../model/store/account";
import "../../res/css modules/account.scss";
import OrderItem from "../reusables/OrderItem";
function Orders() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(account({ option: "Orders" })));
  const handleOrderCategory = (e) => {
    let list = document.getElementsByClassName("order");
    for (let index = 0; index < list.length; index++) {
      list[index].classList.remove("active");
    }
    e.target.classList.add("active");
  };
  return (
    <div className="order_con">
      <div className="order_header">
        {" "}
        <p
          onClick={(e) => handleOrderCategory(e, "open")}
          className="active order"
        >
          OPEN
        </p>
        <p onClick={(e) => handleOrderCategory(e, "closed")} className="order">
          CLOSED
        </p>
      </div>
      <div className="order_card_con">
        <OrderItem
          brand="Norvasc"
          strength="40mg"
          generic="Amlodipine"
          quantity="34"
          price="50000"
          status={{ code: 1, status: "Shipped" }}
        />
        <OrderItem
          brand="Norvasc"
          strength="40mg"
          generic="Amlodipine"
          quantity="34"
          price="50000"
          status={{ code: 0, status: "Confirmed" }}
        />
        <OrderItem
          brand="Norvasc"
          strength="40mg"
          generic="Amlodipine"
          quantity="34"
          price="50000"
          status={{ code: -1, status: "Not Confirmed" }}
        />
        <OrderItem
          brand="Doxycap"
          strength="100mg"
          generic="Doxycycline"
          quantity="34"
          price="120000"
          status={{ code: 1, status: "Shipped" }}
        />
      </div>
    </div>
  );
}

export default Orders;
