import { onSuccess } from "../itemCategory";
import { loading, loadingFinished } from "../loader";

const api = (store) => (next) => async (action) => {
  if (action.type !== "apiCallBegan") return next(action);
  store.dispatch(loading());
  try {
    const request = await fetch("/itemlist/" + action.payload);
    const data = await request.json();
    if (request.ok) {
      await store.dispatch(onSuccess({ data }));
      await store.dispatch(loadingFinished());
    }
  } catch (e) {
    console.log(e);
  }
};
export default api;
