import React, { useEffect, useState } from "react";
import OptHeaders from "./OptHeaders";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { down, up } from "../../../model/store/alert";
//import io from "socket.io-client";
//const socket = io();
function AddItem(props) {
  let dispatch = useDispatch();
  //const [] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let images = [];
    for (const iterator of event.target.images.files) {
      images.push(iterator);
    }
    // dispatch(down());
    // const request = await fetch("/images");
    //const res = await request.blob();
    const myFiles = new FileList(...images);
    console.dir(myFiles);
    console.dir();

    // console.log(form.images.files);
    // form.images.files.length < 3 && alert("Amount of images must be 3");
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
