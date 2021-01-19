import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import "../../res/css modules/list_page.scss";
import testImg from "../../res/images/drug.jpg";
import DrugCard from "./DrugCard";
const ItemsList = (props) => {
  const category = useSelector(
    (state) => state.entities.category[props.history.location.state.title]
  );
  const [categoryList, setCategoryList] = useState({});
  const [width, setWidth] = useState("49%");
  const [filtrate, setFiltrate] = useState("");
  const [_height, set_height] = useState(0);
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [mfr] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [strength] = useState("");
  const [rating, setRating] = useState("");

  // useEffect(() => {
  //   (function ($) {
  //     /**
  //      * Copyright 2012, Digital Fusion
  //      * Licensed under the MIT license.
  //      * http://teamdf.com/jquery-plugins/license/
  //      *
  //      * @author Sam Sehnert
  //      * @desc A small plugin that checks whether elements are within
  //      *     the user visible viewport of a web browser.
  //      *     only accounts for vertical position, not horizontal.
  //      */

  //     $.fn.visible = function (partial) {
  //       var $t = $(this),
  //         $w = $(window),
  //         viewTop = $w.scrollTop(),
  //         viewBottom = viewTop + $w.height(),
  //         _top = $t.offset().top,
  //         _bottom = _top + $t.height(),
  //         compareTop = partial === true ? _bottom : _top,
  //         compareBottom = partial === true ? _top : _bottom;

  //       return compareBottom <= viewBottom && compareTop >= viewTop;
  //     };
  //   })(jquery);
  // });

  return useMemo(() => {
    const handleRearrange = () => {
      width === "49%" ? setWidth("100%") : setWidth("49%");
      //  console.log(document.querySelector(".filtrate_test").offsetHeight);
    };
    const filtrateConHeight = () => {
      return true
        ? set_height(document.querySelector(".filtrate_test").offsetHeight)
        : set_height(0);
    };

    const handleFiltrate = async (params) => {
      await setFiltrate(params);
      filtrateConHeight(params);
    };

    const selectFilter = (category, filter) => {
      set_height(0);
      return category === "brand"
        ? setBrand(filter)
        : category === "sort"
        ? setSort(filter)
        : category === "rating"
        ? setRating(filter)
        : null;
    };
    return (
      <div className="item_list_parent">
        {/* <div className="item__category__list__con">
          {categoryList.categories
            ? categoryList.categories.map((category, index) => {
                return (
                  <p key={index + category + category[1]}>
                    {category.toString()}
                  </p>
                );
              })
            : " "}
        </div> */}
        <div className="item__category__item__list__con">
          {category.map((item) => {
            return (
              <DrugCard
                url={item.images[0]}
                name={item.name}
                manufacturer={item.manufacturer}
                key={item._id}
                price={item.price}
                cart={false}
                item={item}
                {...props}
              />
            );
          })}
        </div>
        <div
          className="filtrate_con"
          style={{
            height: _height,
          }}
        >
          <div className="filtrate_test">
            {filtrate === "sort" ? (
              <>
                {" "}
                <p onClick={() => selectFilter("sort", "A-Z")}>A-Z</p>
                <p onClick={() => selectFilter("sort", "High - Low price")}>
                  High to Low price
                </p>
                <p onClick={() => selectFilter("sort", "Low - High Price")}>
                  Low to Hight price
                </p>
                <p
                  onClick={() =>
                    selectFilter("sort", "Highest - Lowest Rating")
                  }
                >
                  Highest to Lowest Rating
                </p>
                <p
                  onClick={() =>
                    selectFilter("sort", "Lowest - Highest Rating")
                  }
                >
                  Lowest to Highest Rating
                </p>
              </>
            ) : filtrate === "brand" ? (
              <>
                {" "}
                <p onClick={() => selectFilter("brand", "Aztra")}>Aztra</p>
                <p onClick={() => selectFilter("brand", "Zintos")}>Zintos</p>
                <p>hasta</p>
                <p>lavista</p>
                <p>baby</p>
                <p>this is da terminator</p>
                <p>lavista</p>
              </>
            ) : filtrate === "strength" ? (
              <>
                {" "}
                <p>10mg</p>
                <p>5mg</p>
                <p>20mg</p>
              </>
            ) : filtrate === "rating" ? (
              <>
                {" "}
                <p onClick={() => selectFilter("rating", "1 star")}>1 star</p>
                <p onClick={() => selectFilter("rating", "2 star")}>2 star</p>
                <p onClick={() => selectFilter("rating", "3 star")}>3 star</p>
                <p onClick={() => selectFilter("rating", "4 star")}>4 star</p>
              </>
            ) : filtrate === "company" ? (
              <>
                {" "}
                <p>Owo</p>
                <p>Ni</p>
                <p>koko</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="filter_con">
          <div onClick={handleRearrange} className="filter_item view">
            <p>View</p>
          </div>
          <div className="filter_con_main">
            <div onClick={() => handleFiltrate("sort")} className="filter_item">
              <p>Sort : {sort}</p>
            </div>
            <div
              onClick={() => handleFiltrate("brand")}
              className="filter_item"
            >
              <p>Brand: {brand}</p>
            </div>
            <div
              onClick={() => handleFiltrate("company")}
              className="filter_item"
            >
              <p>Manufacturer: {mfr}</p>
            </div>
            <div
              onClick={() => handleFiltrate("price")}
              className="filter_item"
            >
              <p>Price</p>
            </div>
            <div
              onClick={() => handleFiltrate("strength")}
              className="filter_item"
            >
              <p>Strength: {strength}</p>
            </div>

            <div
              onClick={() => handleFiltrate("rating")}
              className="filter_item"
            >
              <p>Rating:{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }, [
    _height,
    brand,
    categoryList.categories,
    categoryList.category,
    filtrate,
    mfr,
    props,
    rating,
    sort,
    strength,
    width,
  ]);
};

export default ItemsList;
