import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "../../res/css modules/checkout.scss";
import AddAddress from "../reusables/AddAddress";
import Address from "./Address";
import Payment from "./Payment";
import Shipment from "./Shippment";
import Summary from "./Summary";
function Checkout(props) {
  const state = useSelector((state) => state.entities);
  const cart = state.cart;
  const [nextAction, setNextAction] = useState("Next");
  const [status, setStatus] = useState("");
  let total = 0;
  useEffect(() => {});
  const handleHeader = (status) => {
    switch (status) {
      case "shipment":
        setStatus("");
        setNextAction("Next");

        break;
      case "payment":
        setStatus("payment");
        setNextAction("Next");
        break;
      case "summary":
        setStatus("summary");
        setNextAction("Confirm");
        break;

      default:
        break;
    }
  };
  const hanldeNext = () => {
    switch (props.history.location.pathname.slice(10)) {
      case "shipment":
        props.history.push("/checkout/payment");
        setNextAction("Next");
        break;
      default:
        props.history.push("/checkout/summary");
        setNextAction("Confirm");
    }
  };
  return (
    <div className="checkout_con main">
      <div className="checkout_heading">
        <p>Jumga</p>
      </div>
      <div className="checkout_status_con">
        <p>Shipment </p>
        <i className="fas fa-long-arrow-alt-right"></i>
        <p>Payment</p>
        <i className="fas fa-long-arrow-alt-right"></i>
        <p>Summary</p>
      </div>

      <div className={"status " + status}></div>
      <Route
        path="/checkout/shipment"
        component={() => (
          <Shipment cart={cart} onLoad={handleHeader} {...props} />
        )}
      />
      <Route
        path="/checkout/payment"
        component={() => (
          <Payment cart={cart} onLoad={handleHeader} {...props} />
        )}
      />
      <Route
        exact
        path="/checkout/addresses"
        component={() => (
          <Address cart={cart} onLoad={handleHeader} {...props} />
        )}
      />
      <Route
        exact
        path="/checkout/addaddress"
        component={() => <AddAddress {...props} />}
      />
      <Route
        exact
        path="/checkout/summary"
        component={() => <Summary onLoad={handleHeader} {...props} />}
      />
      <div className="checkout_card">
        <div className="checkout_card_heading">
          <p>Shipment Details</p>
        </div>
        <div className="shipment_details">
          <p>Estimated Delivery Time</p>
          <p>7 days</p>
        </div>
        {{ ...cart }.ids.map((id) => {
          total += cart.cart[id].quantity * cart.cart[id].price;
          return (
            <div key={id} className="shipment_details">
              <p>{cart.cart[id].name}</p>
              <p>x{cart.cart[id].quantity}</p>
            </div>
          );
        })}

        <div className="shipment_details">
          <p>Items Total</p>
          <p>&#8358;{total}</p>
        </div>
        <div className="shipment_details">
          <p>Shipping Fee</p>
          <p>&#8358; 988</p>
        </div>
        <div className="shipment_details">
          <p>Total</p>
          <p>&#8358; {988 + total}</p>
        </div>
      </div>
      <div onClick={hanldeNext} className="next">
        <p>{nextAction}</p>
      </div>
      <div onClick={() => props.history.push("/cart")} className="next">
        <p>
          <i className="fa fa-shopping-cart"></i>
        </p>
      </div>
    </div>
  );
}

export default Checkout;
