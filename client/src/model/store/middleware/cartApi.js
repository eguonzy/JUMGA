import axios from "axios";
import { increaseQuantity, itemAdded } from "../cart";
import { getItemsList } from "../category";
import { loading, loadingFinished } from "../loader";

const cartApi = (store) => (next) => async (action) => {
  //store.dispatch(loading());
  let state = JSON.parse(localStorage.getItem("cart"));
  const { payload } = action;
  if (action.type === "getCart") {
    try {
      const request = await axios({
        url: "/add_to_cart",
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("locolastic"),
        },
        data: payload,
      });
      const response = await request.data;
      store.dispatch(itemAdded(response));
      store.dispatch(loadingFinished());
    } catch (e) {
      store.dispatch(loadingFinished());
      alert("failed");
      console.log(e);
    }
  }

  if (action.type === "updateCart") {
    const request = await axios({
      url: "/update_cart/" + payload.case,
      data: payload,
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("locolastic"),
      },
    });
    const response = await request.data;

    store.dispatch(increaseQuantity({ response }));
    store.dispatch(loadingFinished());
  }

  if (action.type !== "getCart") return next(action);
};
export default cartApi;
