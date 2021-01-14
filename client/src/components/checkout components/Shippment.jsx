import React, { useEffect } from "react";
import "../../res/css modules/checkout.scss";
function Shipment({ history, onLoad }) {
  const addresses = document.getElementsByClassName("address");
  useEffect(() => {
    onLoad("shipment");
    localStorage.setItem("status", "shipment");
    for (let index = 0; index < addresses.length; index++) {
      addresses[index].onclick = function () {
        let active = document.querySelector("form").querySelector(".active");
        active.className = active.className.replace(" active", "");
        this.className += " active";
      };
    }
  }, [addresses, onLoad]);

  return (
    <div className="checkout_con">
      <div className="checkout_card">
        <div className="checkout_card_heading">
          <p>Select An Address</p>
          <div onClick={() => history.push("/checkout/addresses")}>
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
        <form>
          <div className="address active">
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
          <div className="address">
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
  );
}

export default Shipment;
