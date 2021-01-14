import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import "../../../res/css modules/description_page.scss";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import caret from "../../../res/images/down-arrow (1).svg";
import OptHeaders from "./OptHeaders";
function Preview(props) {
  const {
    brand,
    generic,
    strength,
    formulation,
    drug_class,
    description,
    expiry_date,
    manufacture_date,
    packsize,

    nafdac,
    price,
    company,
    images,
  } = useSelector((state) => state.entities.preview);
  let [isDesc, setIsDesc] = useState(false);
  let [isDetails, setIsDetails] = useState(true);
  let [isPolicy, setIsPolicy] = useState(false);
  let [desHeight, setDesHeight] = useState(0);
  let [detHeight, setDetHeight] = useState(0);
  let [polHeight, setPolHeight] = useState(0);
  const desChild = useRef(null); //description box for slide dow
  const desCaret = useRef(null); //for caret transition
  const detChild = useRef(null); //for details transition
  const detCaret = useRef(null); //for details caret transition
  const polChild = useRef(null); //for details caret transition
  const polCaret = useRef(null);

  useEffect(() => {
    setDetHeight(detChild.current.offsetHeight);
  }, []);
  const handleAddToCart = (form) => {
    // form.preventDefault();
    //  form.target.blur();
    //cartDispatch(increaseQuantity({ id: item.id, quantity: cartQuantity }));
    alert(`Coming Soon`);
  };
  const handleReveal = async (e) => {
    await setDesHeight(desChild.current.offsetHeight);
    await setDetHeight(detChild.current.offsetHeight);
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
  const settings = {
    className: "",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
    arrows: true,
    dotsClass: "slick-dots carousel_dots",
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <div className="description_con">
      <OptHeaders {...props} />
      <div className="carousel_con">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.size} className="carousel">
              <img src={URL.createObjectURL(image)} alt="drug" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="description_title_parent">
        <div className="description_title_con">
          <p className="description_title">
            {brand} {strength}
          </p>
          <i style={{ color: "red" }} className="fa fa-heart"></i>
        </div>
        <div className="description_ratings_con">
          <div className="ratings">
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <i style={{ color: "gold" }} className="fa fa-star"></i>
            <span>(0)</span>
          </div>{" "}
          <p className="description_orders">0 sold</p>
        </div>
        <p className="vendor">Stanley and sons kiniko</p>
        <div className="qty_price_con ">
          <div className="quantity description_">
            <div className="minus-con">
              <i className="fa fa-minus"></i>
            </div>
            <input
              inputMode="numeric"
              type="number"
              name="quantity"
              id=""
              className="quantity_input"
              min="1"
            />{" "}
            <div className="plus-con">
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <p className="description_item_price">&#8358;{price}</p>
        </div>
      </div>
      <div className="description_cart_con">
        <div onClick={handleAddToCart} className="add_to_cart">
          <p>Add To Cart</p>
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
            {description}
          </p>
        </div>
      </div>
      <div className="description_child_con">
        <div
          onClick={() => handleReveal("details")}
          className="description_child"
        >
          <p>Details</p>
          <img
            style={{
              transform: isDetails ? "rotateZ(-180deg)" : "rotate(0deg)",
            }}
            ref={detCaret}
            src={caret}
            alt="caret"
          />
        </div>
        <div
          style={{
            height: isDetails ? detHeight + "px" : "0px",
            opacity: isDetails ? 1 : 0,
          }}
          className="description_text_con"
        >
          <table ref={detChild}>
            <tr>
              <td>Brand</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>Strength</td>
              <td>{strength}</td>
            </tr>
            <tr>
              <td>Generic</td>
              <td style={{ fontSize: "small" }}>
                {generic} {strength}
              </td>
            </tr>
            <tr>
              <td>Formulation</td>
              <td>{formulation}</td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td> {company}</td>
            </tr>
            <tr>
              <td>MFD</td>
              <td>{manufacture_date}</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>EXD</td>
              <td>{expiry_date}</td>
            </tr>
            <tr>
              <td>Nafdac No#</td>
              <td>{nafdac}</td>
            </tr>
            <tr>
              <td>Pack Size</td>
              <td>{packsize}</td>
            </tr>
          </table>
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
    </div>
  );
}

export default Preview;
