import axios from "axios";
import React, { useEffect } from "react";
import smile from "../../res/images/smile.svg";
import sad from "../../res/images/sad.svg";
import "../../res/css modules/payment.scss";
import { useDispatch, useSelector } from "react-redux";
import { update_user } from "../../model/store/userAuth";
import { loadingFinished } from "../../model/store/loader";
import { itemAdded } from "../../model/store/cart";
function PaymentDone(props) {
  const state = useSelector((state) => state);
  const user = state.auth.userAuth.user;
  const cart = state.entities.cart;
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState(false);
  const [id, setId] = React.useState("");

  const updateUser = async (id, isOrder = false) => {
    if (isOrder) {
      const request = await axios.post(
        "/order_successful",
        { id, cart: isOrder },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("locolastic"),
          },
        }
      );
      return await request.data;
    }
    const request = await axios({
      method: "GET",
      url: "/payment_successful/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("locolastic"),
      },
    });
    const response = await request.data;
    return response;
  };
  useEffect(() => {
    if (user === null) props.history.push("/");
    let href = window.location.href;
    let id = href.slice(href.lastIndexOf("=") + 1);
    setId(id);
    setStatus(true);
    if (href.indexOf("order") > 1) {
      updateUser(id, cart).then((user) => {
        dispatch(update_user(user));
        dispatch(loadingFinished());
      });
      return;
    }
    if (href.indexOf("successful") > 1) {
      updateUser(id).then((user) => {
        dispatch(update_user(user));
        dispatch(loadingFinished());
      });
      return;
    }

    setStatus(false);
  }, []);
  const handleBack = () => {
    if (user.position === "merchant") props.history.push("/merchant/home");
    else props.history.push("/");
  };
  return (
    <div className="payment-parent">
      {" "}
      <div className="payment-status">
        <p>{status ? "Payment Successful" : "Payment Failed"}</p>
        <p>Transaction id : {id}</p>
      </div>
      <img src={status ? smile : sad} alt="status" />
      <p className="thanks">{!status ? "Sorry" : "THANKS!"}</p>
      <div onClick={handleBack} className="go-back">
        <p>BACK</p>
      </div>
    </div>
  );
}

export default PaymentDone;
