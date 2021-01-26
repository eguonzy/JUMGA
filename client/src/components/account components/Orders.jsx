import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { account } from "../../model/store/account";
import "../../res/css modules/account.scss";
import OrderItem from "../reusables/OrderItem";
function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth.user);
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
        {user.orders_customer.map(({ item }) => (
          <OrderItem
            brand={item.name}
            generic={item.manufacturer}
            quantity={item.quantity}
            price={item.price}
            img={item.images[0]}
            status={{ code: 1, status: "Shipped" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
