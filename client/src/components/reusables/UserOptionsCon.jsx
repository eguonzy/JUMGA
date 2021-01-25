import axios from "axios";
import React from "react";
import UserOptions from "./UserOptions";

function UserOptionsCon({ handleAccount, styles, isAuthorized, history }) {
  const handleLogout = async () => {
    await axios.get("/logout", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("locolastic"),
      },
    });
    history.push("/");
    localStorage.clear();
  };
  return (
    <div className={styles.profile}>
      {isAuthorized ? (
        <>
          {" "}
          <UserOptions
            arrg={0}
            option="My Account"
            handleAccount={handleAccount}
            icon="user"
          />
          <UserOptions
            arrg={1}
            option="My Orders"
            icon="box-open"
            handleAccount={handleAccount}
          />
          <UserOptions
            arrg={2}
            option="My Wishlist"
            handleAccount={handleAccount}
            icon="heart heart"
          />{" "}
          <p onClick={handleLogout} className={styles.logout}>
            <span>LOGOUT</span> <i className="fa fa-sign-out-alt"></i>
          </p>
        </>
      ) : (
        <>
          <UserOptions
            arrg={3}
            option="Login"
            icon="sign-in-alt"
            handleAccount={handleAccount}
          />
          <UserOptions
            arrg={4}
            option="Sign up"
            icon="user-plus"
            handleAccount={handleAccount}
          />
        </>
      )}
    </div>
  );
}

export default UserOptionsCon;
