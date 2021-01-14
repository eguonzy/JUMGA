import React from "react";
import OptHeaders from "./resusables/OptHeaders";
import ShopCard from "./resusables/ShopCard";

function Shop(props) {
  return (
    <div>
      <OptHeaders {...props} title="Shop" search={true} add={true} />
      <ShopCard />
    </div>
  );
}

export default Shop;
