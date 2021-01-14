import React from "react";
import { useSelector } from "react-redux";
import "../../res/css modules/alert.scss";
function AlertBox(props) {
  const state = useSelector((state) => state.entities);

  return (
    <div className={"alert-parent " + state.alert}>
      Item Added Successfully! <i className="fa fa-check-circle fa-lg"></i>
    </div>
  );
}

export default AlertBox;
