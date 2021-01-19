import { getItemsList } from "../category";
import { loading, loadingFinished } from "../loader";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") return next(action);
  console.log(action.type);
  store.dispatch(loading());
  try {
    const request = await fetch("/items");
    const items = await request.json();
    if (request.ok) {
      await store.dispatch(getItemsList({ items }));
      await store.dispatch(loadingFinished());
    }
  } catch (e) {
    console.log(e);
  }
};
export default api;
