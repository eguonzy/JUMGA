import React from "react";
import "../../res/css modules/cart.scss";
import norvasc from "../../res/images/drug.jpg";
import "../../res/css modules/description_page.scss";
import CartCard from "../reusables/CartCard";
import { useSelector } from "react-redux";
import ItemList from "../reusables/featured_list";
function CartComponent(props) {
  const { cart } = useSelector((state) => state.entities);
  const cartIds = cart.ids;
  const cartObject = cart.cart;
  const { history } = props;
  let total = 0;

  const cards = [
    {
      brand: "Lonart DS",
      producer: "OKO",
      expiry: "30/04/94",
      image: norvasc,
      price: 1400,
      packsize: 6,
      generic: "tab Artemeter 80mg +  Lumefantrine 480mg",
    },
    {
      brand: "Norvasc 10mg",
      producer: "Pfizer",
      expiry: "30/04/94",
      image: norvasc,
      packsize: 10,
      price: 5000,
      generic: "tab Amlodipine 10mg",
    },
    {
      brand: "Natrilix 2.5mg",
      producer: "Sanofi",
      expiry: "30/04/94",
      packsize: 10,
      price: 14000,
      image: norvasc,
      generic: "tab Indapamide 2.5mg",
    },
    {
      brand: "Panadol Extra",
      producer: "May & Baker",
      expiry: "30/04/94",
      packsize: 10,
      price: 10000,
      image: norvasc,
      generic: "Paracetamol 500mg + caffeine",
    },
    {
      brand: "Cocodamol",
      producer: "Emzor",
      expiry: "30/04/94",
      packsize: 10,
      price: 800,
      image: norvasc,
      generic: "tab Paracetamol 500mg + Codeine 8mg",
    },
  ];
  return (
    <div className="cart_parent">
      {cartIds.length <= 0 ? (
        <div className="empty_cart">Cart Is Empty</div>
      ) : (
        <>
          <div className="cart_card_con">
            {cartIds.map((id) => {
              total += cartObject[id].quantity * cartObject[id].price;
              return (
                <CartCard
                  key={id}
                  img={norvasc}
                  expDate="30/5/2020"
                  producer={cartObject[id.company]}
                  packsize={cartObject[id.pack_size]}
                  brand={cartObject[id].name}
                  formulation={cartObject[id].formulation}
                  id={id}
                  quantity={cartObject[id].quantity}
                  price={cartObject[id].price}
                  generic={cartObject[id].generic_name}
                  strength={cartObject[id].strength}
                  {...props}
                />
              );
            })}
          </div>
          <div
            onClick={() => history.push("/checkout/shipment")}
            className="checkout"
          >
            <p>CHECKOUT &#8358;{total}</p>
          </div>
        </>
      )}
      <div style={{ padding: "0.5em" }}>
        <ItemList title="More By Vendor" cards={cards} />
        <ItemList title="Recently viewed" cards={cards.reverse()} />
      </div>
    </div>
  );
}

export default CartComponent;
