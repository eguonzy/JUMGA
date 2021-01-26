import React from "react";
import "../../res/css modules/orderItem.scss";
import norvasc from "../../res/images/drug.jpg";
function OrderItem({ brand, generic, img, strength, quantity, price, status }) {
  return (
    <div className="orderItemCard">
      <div className="card-img">
        <img src={"/get_image/" + img} alt="oops" />
      </div>
      <div className="card-info">
        <p className="name">{brand}</p>
        <p>
          {generic} {strength}
        </p>
        <p>QTY {quantity}</p>
        <p className="price">&#8358;{price}</p>
        <p>
          <span>Status:</span>{" "}
          <span
            style={{
              backgroundColor:
                status.code === 1
                  ? "green"
                  : status.code === 0
                  ? "darkkhaki"
                  : status.code === "2"
                  ? "black"
                  : "orangered",
            }}
            className="order-status"
          >
            {status.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
