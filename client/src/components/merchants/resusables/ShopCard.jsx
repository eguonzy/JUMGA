import React from "react";
import norvasc from "../../../res/images/drug.jpg";
function ShopCard(props) {
  return (
    <div className="shop-card-con">
      <div className="img-con">
        <p className="shelved">shelved</p>
        <img src={norvasc} alt="" />
      </div>
      <div className="shop-item-details-con">
        <p className="brand-name">Norvasc</p>
        <p className="generic-name">Amlodipine 20mg</p>
        <p className="generic-name">x30 </p>
        <p className="stock">Qty: 2000</p>
        <p className="stock">Sold: 0</p>
        <p className="price">&#8358;3000</p>
      </div>
      <div className="shop-actions-con">
        <i className="fa fa-eye"></i>

        <div>
          <i className="fa fa-edit"></i>
        </div>
        <div>
          <p className="total-sales">Total Sales: &#8358;10000</p>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
