import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home_components/home_page";
import Mart from "./components/mart_components/mart_landing";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import { Provider } from "react-redux";
import configureStore from "./model/store/configureStore";
import CheckOut from "./components/checkout components/Checkout";
import UserOptions from "./components/account components/UserOptions";
import MerchantParent from "./components/merchants/MerchantParent";
import AlertBox from "./components/reusables/AlertBox";
import PaymentDone from "./components/payment_confirmation/PaymentDone";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AlertBox />
        <Switch>
          <Route path="/payment_done" component={PaymentDone} />
          <Route path="/account" component={UserOptions} />
          <Route path="/auth" component={HomePage} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/merchant" component={MerchantParent} />
          <Route path="/" component={Mart} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
