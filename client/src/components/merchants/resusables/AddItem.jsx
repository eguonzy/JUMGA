import React from "react";
import OptHeaders from "./OptHeaders";
import AddForm from "./AddForm";
import { useDispatch, useSelector } from "react-redux";
import { down, up } from "../../../model/store/alert";
import { add_item } from "../../../model/store/userAuth";
//import io from "socket.io-client";
//const socket = io();
function AddItem(props) {
  let dispatch = useDispatch();
  //const [] = useState(0);

  const state = useSelector((state) => state.entities.preview.images);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    console.log(state);
    console.log(event.target.name.value);
    let form = new FormData(event.target);
    form.append("images", state);

    const request = await fetch("/add_item", {
      method: "POST",
      body: form,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("locolastic"),
      },
    });
    const res = await request.json();

    if (request.status === 200) {
      dispatch(down());
      dispatch(add_item({ shop_items: res.shop_items }));
      setTimeout(() => {
        dispatch(up());
      }, 2000);
      return;
    } //state.length < 3 && alert("Amount of images must be 3");
    alert("failed");
  };
  return (
    <div className="add-item">
      <OptHeaders {...props} />
      <AddForm history={props.history} onSubmit={handleSubmit} />
    </div>
  );
}

export default AddItem;
