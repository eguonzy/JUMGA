import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { account } from "../../model/store/account";

function Account({ history }) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(account({ option: "Account" })));

  return (
    <div className="account_options_parent">
      <div className="account_options_con">
        <div
          onClick={() => history.push("/account/profile")}
          className="option_con"
        >
          <p>
            <i className="fa fa-user"></i> <span>Profile</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div onClick={() => history.push("/cart")} className="option_con">
          <p>
            <i className="fa fa-shopping-cart"></i> <span>My Cart</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div
          onClick={() => history.push("/account/orders")}
          className="option_con"
        >
          <p>
            <i className="fa fa-box-open"></i> <span>My Orders</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div
          onClick={() => history.push("/account/wishlist")}
          className="option_con"
        >
          <p>
            <i className="fa fa-heart heart"></i> <span>WishList</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="option_con">
          <p>
            <i className="fa fa-bell"></i> <span>Notifications</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="option_con">
          <p>
            <i className="fa fa-address-book"></i> <span>My Addresses</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="option_con">
          <p>
            <i className="fa fa-user-tie"></i> <span>My Merchants</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
        <div className="option_con">
          <p>
            <i className="far fa-handshake"></i> <span>Become A Merchant</span>
          </p>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
      <div className="logout_con">
        <p>
          <i className="fa fa-sign-out-alt"> </i>
          <span>LOGOUT</span>
        </p>
      </div>
    </div>
  );
}

export default Account;
