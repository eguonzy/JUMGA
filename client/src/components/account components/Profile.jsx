import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { account } from "../../model/store/account";

function Profile(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth.user);
  useEffect(() => dispatch(account({ option: "Profile" })));

  return (
    <div className="profile_parent">
      <div onClick={() => alert("Edit wetin na?")} className="profile_bio">
        <div className="edit_con">
          <i className="fa fa-edit fa-sm"></i>
        </div>

        <div className="profile_details_con">
          <p>
            <span className="key">First Name</span>
            <span className="value">{user.firstname}</span>
          </p>
          <p>
            <span className="key">Last Name</span>
            <span className="value">{user.lastname}</span>
          </p>
          <p>
            <span className="key">Sex</span>
            <span className="value">{user.sex}</span>
          </p>
          <p>
            <span className="key">Email Address</span>
            <span className="value">{user.email}</span>
          </p>
          <p>
            <span className="key">Phone No</span>
            <span className="value">{user.phone_number}</span>
          </p>
          <p>
            <span className="key">Company Name</span>
            <span className="value">{user.business_name}</span>
          </p>
        </div>
      </div>

      <div
        onClick={() => alert("Oya tell me which password you wan change bros")}
        className="profile_bio"
      >
        <p className="change_password">Change Password</p>
      </div>
    </div>
  );
}

export default Profile;
