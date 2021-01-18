import React from "react";
import { useSelector } from "react-redux";
import OptHeaders from "./resusables/OptHeaders";
import ShopCard from "./resusables/ShopCard";

function Shop(props) {
  const items = useSelector((state) => state.auth.userAuth.user.shop_items);
  console.log(items);
  return (
    <div>
      <OptHeaders {...props} title="Shop" search={true} add={true} />
      {items.map((item) => {
        console.log(item.images[0]);
        return (
          <ShopCard
            key={item._id}
            manufacturer={item.manufacturer}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            url={item.images[0]}
          />
        );
      })}
    </div>
  );
}

export default Shop;
