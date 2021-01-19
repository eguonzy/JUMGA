import React, { useEffect } from "react";

import mastercard from "../../res/images/mastercard.svg";
import visa from "../../res/images/Visa.svg";
function Summary({ history, onLoad }) {
  useEffect(() => {
    onLoad("summary");
  });
  return (
    <div className="checkout_con">
      <div className="checkout_card myaddress">
        <div className="checkout_card_heading">
          <p>Summary</p>
        </div>
        <div className="checkout_card myaddress">
          <div className="checkout_card_heading">
            <p>Shipping</p>
            <div onClick={() => history.push("/checkout/shipment")}>
              <i className="fa fa-edit"></i>
            </div>
          </div>
          <form>
            {" "}
            <div className="address ">
              {" "}
              <div className="radio_con">
                <input type="radio" name="address" />{" "}
                <span className="radiocheck"></span>
              </div>
              <div className="address_details">
                <p className="address_name">Maroh Eguono paul</p>
                <p>No 8 Adeola road</p>
                <p>Sapele</p>
                <p>Delta State</p>
                <p>+234-7031111421</p>
              </div>
              <div
                onClick={() => history.push("/checkout/addresses")}
                className="edit"
              >
                <i className="far fa-edit fa-sm"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Summary;
