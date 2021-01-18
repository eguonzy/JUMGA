import React from "react";
import { useSelector } from "react-redux";
import norvasc from "../../../res/images/drug.jpg";
function ShopCard({ description, quantity, name, price, manufacturer, url }) {
  console.log(url);
  return (
    <div className="shop-card-con">
      <div className="img-con">
        <img src={"/get_image/" + url} alt="" />
      </div>
      <div className="shop-item-details-con">
        <p className="name">{name}</p>
        <p className="manufacturer">{manufacturer}</p>
        <p className="stock">Qty: {quantity}</p>
        <p className="stock">Sold: 0</p>
        <p className="price">&#8358;{price}</p>
      </div>
      <div className="shop-actions-con">
        <div>
          <i className="fa fa-edit"></i>
        </div>
        <div>
          <p className="total-sales">Total Sales: &#8358;0</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
