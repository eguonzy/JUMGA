import React from "react";
import { useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";
import "../../res/css modules/account.scss";
import Orders from "./Orders";
import WishList from "./WishList";
import Settings from "./Settings";
import Account from "./Account";
import Notifications from "./Notifications";
import Profile from "./Profile";
function UserOptions(props) {
  const state = useSelector((state) => state.entities.account);
  console.log(state);
  return (
    <div className="account_parent">
      <div className="account_logo">
        <Link to="/">
          <p className="neomorph">Jumga</p>
        </Link>
      </div>
      <div className="account_header">
        <div onClick={() => props.history.goBack()}>
          <i className="fa fa-long-arrow-alt-left fa-lg"></i>{" "}
        </div>
        <p>{state.current}</p>
      </div>
      <Route
        path="/account/account"
        exact
        component={() => <Account {...props} />}
      />
      <Route
        path="/account/notifications"
        exact
        component={() => <Notifications {...props} />}
      />
      <Route
        path="/account/profile"
        exact
        component={() => <Profile {...props} />}
      />
      <Route
        path="/account/orders"
        exact
        component={() => <Orders {...props} />}
      />

      <Route
        path="/account/wishlist"
        exact
        component={() => <WishList {...props} />}
      />

      <Route
        path="/account/settings"
        exact
        component={() => <Settings {...props} />}
      />
    </div>
  );
}

export default UserOptions;
