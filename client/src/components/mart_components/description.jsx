// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "../../res/css modules/description_page.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import ph1 from "../../res/images/smile.svg";
import caret from "../../res/images/down-arrow (1).svg";
import ItemList from "../reusables/featured_list";
import Input from "../reusables/input";
const Description = (props) => {
  let [isDesc, setIsDesc] = useState(false);
  let [isDetails, setIsDetails] = useState(true);
  let [isPolicy, setIsPolicy] = useState(false);
  let [desHeight, setDesHeight] = useState(0);
  let [detHeight, setDetHeight] = useState(0);
  let [polHeight, setPolHeight] = useState(0);
  let [cartQuantity, setCartQuantity] = useState(1);
  const desChild = useRef(null); //description box for slide dow
  const desCaret = useRef(null); //for caret transition
  const detChild = useRef(null); //for details transition
  const detCaret = useRef(null); //for details caret transition
  const polChild = useRef(null); //for details caret transition
  const polCaret = useRef(null); //for details caret transition
  const item = props.history.location.state;
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      const myItem = cart.find(
        (cart_item) => item._id.toString() === cart_item.item._id.toString()
      );
      myItem && setCartQuantity(myItem.item.cart_quantity);
    }
  }, [cartQuantity, item._id]);
  const handleAddToCart = (form) => {
    form.preventDefault();
    form.target.blur();

    alert(`Coming Soon`);
  };
  const handleReveal = async (e) => {
    await setDesHeight(desChild.current.offsetHeight);
    //  await setDetHeight(detChild.current.offsetHeight);
    await setPolHeight(polChild.current.offsetHeight);
    console.log(desHeight, detHeight);
    if (e === "description") {
      if (!isDesc) {
        await setIsDesc(true);
        return;
      } else {
        await setIsDesc(false);
        return;
      }
    }
    if (e === "details") {
      if (!isDetails) {
        await setIsDetails(true);
        return;
      } else {
        await setIsDetails(false);
        return;
      }
    }
    if (e === "policy") {
      if (!isPolicy) {
        await setIsPolicy(true);
        return;
      } else {
        await setIsPolicy(false);
        return;
      }
    }
  };

  const handleCartQuantity = async (e) => {
    if (e.target) {
      if (e.target.value === "") {
        setCartQuantity(0);
        return;
      }
      if (e.target.value[0] === "0") {
        e.target.value = e.target.value[1];
      }
    }

    if (e === "-" && cartQuantity === 0 && !e.target) {
      return;
    }

    e === "+"
      ? await setCartQuantity((prevState) => prevState + 1)
      : e === "-"
      ? await setCartQuantity((prevState) => prevState - 1)
      : await setCartQuantity(parseInt(e.target.value));
  };
  const settings = {
    className: "",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    arrows: true,
    dotsClass: "slick-dots carousel_dots",
    speed: 500,
    slidesToScroll: 1,
  };
  const cards = [
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
    {
      brand: "Lorem",
      image: ph1,
      price: 1400,

      generic: "ipsum dolor ipsum lorem",
    },
  ];

  return (
    <div className="description_con">
      <div className="carousel_con">
        <Slider {...settings}>
          {item.images.map((image) => (
            <div key={image + 1} className="carousel">
              <img src={"/get_image/" + image} alt="item" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="description_title_parent">
        <div className="description_title_con">
          <p className="description_title">{item.name}</p>
          <i style={{ color: "red" }} className="fa fa-heart"></i>
        </div>
        <div className="description_ratings_con">
          <div className="ratings">
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <span>(50)</span>
          </div>{" "}
          <p className="description_orders">100 sold</p>
        </div>
        <p className="vendor">Stanley and sons kiniko</p>
        <div className="qty_price_con ">
          <Input
            cart="true"
            cart_quantity={cartQuantity}
            isAdded={cartQuantity > 1}
            item={item}
            {...props}
          />
        </div>
      </div>

      <div className="description_child_con first">
        <div
          onClick={() => handleReveal("description")}
          className="description_child"
        >
          <p>Description</p>

          <img
            style={{
              transform: isDesc ? "rotateZ(-180deg)" : "rotateZ(0deg)",
            }}
            ref={desCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isDesc ? `${desHeight}px` : "0px",
            opacity: isDesc ? 1 : 0,
          }}
          className="description_text_con"
        >
          <p ref={desChild} className="description_text">
            {item.description}
          </p>
        </div>
      </div>

      <div className="description_child_con">
        <div
          onClick={() => handleReveal("policy")}
          className="description_child"
        >
          <p>Return Policy</p>

          <img
            style={{
              transform: isPolicy ? "rotateZ(-180deg)" : "rotateZ(0deg)",
            }}
            ref={polCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isPolicy ? `${polHeight}px` : "0px",
            opacity: isPolicy ? 1 : 0,
          }}
          className="description_text_con"
        >
          <p ref={polChild} className="description_text">
            We have a OYO return policy. Purchase at your own{" "}
            <span style={{ color: "red" }}> RISK </span>
          </p>
        </div>
      </div>
      <div className="description_rating">
        <div className="rating_con">
          <div className="rating_first_child">
            <p className="rating_title">Reviews (50)</p>

            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <div className="sample_rating">
              <p className="sample_rating_heading">
                <span>
                  Jane Watson
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                  <i style={{ color: "gold" }} className="fa fa-star fa-xs"></i>
                </span>
                <span>30/04/20</span>
              </p>
              <p className="sample_rating_title">Loved IT!!!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolores eaque repellat ut sit beatae? Sequi, dolor recusandae
                eos officiis, corporis consequatur eum voluptates porro
                asperiores laudantium vel fugit nostrum.
              </p>
            </div>
          </div>

          <img src={caret} alt="more ratings" />
        </div>
      </div>

      <ItemList
        title="More by this Vendor"
        handleCartQuantity={handleCartQuantity}
        cards={cards}
      />
      <ItemList
        title="Recently Viewed"
        handleCartQuantity={handleCartQuantity}
        cards={[...cards].reverse()}
      />
    </div>
  );
};

export default Description;
