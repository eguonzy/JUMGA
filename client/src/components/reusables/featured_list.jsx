import React from "react";

import "../../res/css modules/description_page.scss";
import Input from "./input";
const ItemList = (props) => {
  // const reducer = (state = 0, action) => {
  //   switch (action.type) {
  //     case "ACTION_TYPE":
  //       return;
  //     default:
  //       return state;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, 0);
  const { cards, title } = props;

  return (
    <div className="more_by_vendor_con">
      <p className="more_p">{title}</p>
      <div className="more_card_con">
        {cards.map((card, index) => {
          return (
            <div key={card + index} className="more_card">
              <img src={card.image} alt="drug" />
              <div className="more_card_details_con">
                <p className="more_details_title">{card.brand}</p>
                <p className="more_details_generic">
                  {card.generic.length > 40
                    ? card.generic.slice(0, 40) + "..."
                    : card.generic}{" "}
                </p>
                <p>X{card.packsize}</p>
                <p className="more_details_mfr">{card.producer}</p>
                <p className="more_details_texp">{card.expiry}</p>
                <p className="more_price">&#8358;{card.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
