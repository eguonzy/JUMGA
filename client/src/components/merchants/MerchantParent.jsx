import React from "react";
import "../../res/css modules/merchant_parent.scss";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import MerchantLanding from "./MerchantLanding";
import Shop from "./Shop";
import AddItem from "./resusables/AddItem";
import Preview from "./resusables/Preview";
function MerchantParent({ history }) {
  return (
    <div className="mechant_parent_con">
      <NavBar />
      <Route path="/merchant/shop" exact component={Shop} />
      <Route path="/merchant/home" component={MerchantLanding} />
      <Route path="/merchant/additem" component={AddItem} />
      <Route path="/merchant/preview" component={Preview} />
    </div>
  );
}

export default MerchantParent;
