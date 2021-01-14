import React, { useEffect } from "react";
import "../../res/css modules/account.scss";
import WishListCard from "../reusables/WishListCard";
import norvasc from "../../res/images/drug.jpg";
import { useDispatch } from "react-redux";
import { account } from "../../model/store/account";
function WishList() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(account({ option: "WishList" })));
  return (
    <div>
      <WishListCard
        brand="Norvasc"
        expDate="30/30/30"
        generic="Amlodipine"
        packsize="30"
        price="3000"
        item={{ id: 0 }}
        img={norvasc}
      />
      <WishListCard
        brand="Norvasc"
        expDate="30/30/30"
        generic="Amlodipine"
        packsize="30"
        price="3000"
        item={{ id: 0 }}
        img={norvasc}
      />
      <WishListCard
        brand="Norvasc"
        expDate="30/30/30"
        generic="Amlodipine"
        packsize="30"
        price="3000"
        item={{ id: 0 }}
        img={norvasc}
      />
    </div>
  );
}

export default WishList;
