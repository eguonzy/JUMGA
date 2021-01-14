import React from "react";
import mastercard from "../../res/images/mastercard.svg";
import visa from "../../res/images/Visa.svg";
import bank from "../../res/images/bank.svg";
localStorage.setItem("status", "payment");
function Payment({ history, onLoad }) {
  const addresses = document.getElementsByClassName("address");

  React.useEffect(() => {
    onLoad("payment");
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
      <div className="checkout_card myaddress">
        <div className="checkout_card_heading">
          <p>Choose Payment Method</p>
        </div>
        <form>
          <div className="address active">
            {" "}
            <div className="radio_con">
              <input type="radio" name="address" />{" "}
              <span className="radiocheck"></span>
            </div>
            <div className="address_details">
              <p className="address_name"> Credit or Debit card</p>
              <p>Pay using your credit or debit cards</p>
              <p>Cards from all banks are supported</p>
              <p>Safe and secure</p>
              <div className="card_logo_con">
                <img
                  src={mastercard}
                  title="mastercard logo"
                  alt="mastercard logo"
                />
                <img
                  alt="Credit Card Logos"
                  title="Credit Card Logos"
                  src={visa}
                  border="0"
                />
              </div>
            </div>
          </div>
          <div className="address ">
            {" "}
            <div className="radio_con">
              <input type="radio" name="address" />{" "}
              <span className="radiocheck"></span>
            </div>
            <div className="address_details">
              <p className="address_name"> Pay On Delivery</p>

              <div className="card_logo_con">
                <img src={bank} alt="bank logo" title="bank logo" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
