import axios from "axios";
import React from "react";
import smile from "../../res/images/smile.svg";
import sad from "../../res/images/sad.svg";
import "../../res/css modules/payment.scss";
function PaymentDone(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [status, setStatus] = React.useState(false);
  const [id, setId] = React.useState("");
  const updateUser = async (id) => {
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
  React.useEffect(() => {
    if (user === null) props.history.push("/");
    let href = window.location.href;
    let id = href.slice(href.lastIndexOf("=") + 1);
    setId(id);

    if (window.location.href.indexOf("successful") > 1) {
      setStatus(true);
      updateUser(id).then((user) =>
        localStorage.setItem("user", JSON.stringify(user))
      );
      return;
    }
    setStatus(false);
  }, [props.history, user]);
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
