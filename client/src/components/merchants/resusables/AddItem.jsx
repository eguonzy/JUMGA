import React, { useEffect, useState } from "react";
import OptHeaders from "./OptHeaders";
import AddForm from "./AddForm";
import { useDispatch, useSelector } from "react-redux";
import { down, up } from "../../../model/store/alert";
//import io from "socket.io-client";
//const socket = io();
function AddItem(props) {
  let dispatch = useDispatch();
  //const [] = useState(0);

  const state = useSelector((state) => state.entities.preview.images);

  const handleSubmit = async (event) => {
    "use strict";
    event.preventDefault();
    event.persist();
    let form = new FormData(event.target);
    form.append("images", state);
    let images = [];
    dispatch(down());
    const request = await fetch("/add_image", { method: "POST", body: form });
    const res = await request.blob();
    //state.length < 3 && alert("Amount of images must be 3");
    setTimeout(() => {
      dispatch(up());
    }, 2000);
  };
  return (
    <div className="add-item">
      <OptHeaders {...props} />
      <AddForm history={props.history} onSubmit={handleSubmit} />
    </div>
  );
}

export default AddItem;
