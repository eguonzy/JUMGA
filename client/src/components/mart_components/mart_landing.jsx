import React, { useMemo } from "react";
import { Route, Link } from "react-router-dom";
import styles from "../../res/css modules/bottom_menu.module.scss";
import BottomMenu from "../reusables/bottom_menu";
import CategoryMenu from "../reusables/cartegory_menu";
import Home from "../mart_components/mart_homepage";
import ItemsList from "../reusables/item_list";
import Description from "./description";
import { useDispatch, useSelector } from "react-redux";
import { itemAdded } from "../../model/store/cart";
import { account } from "../../model/store/account";
import CartComponent from "./CartComponent";
import Orders from "../account components/Orders";
import { gsap } from "gsap";
const Mart_Landing = (props) => {
  const Dispatch = useDispatch();
  const isLoading = useSelector((state) => state.entities.loader);
  //Gsap.registerPlugin(ScrollTrigger);
  //controls the click response of category first items like "all"
  //arrg is used to determine if the click is to take user to the list screen if true or to open a category menu

  let prevScrollpos = window.pageYOffset;
  const handleCloseUserOptions = (e) => {
    gsap.to("." + styles.profile, {
      display: "none",
      x: "100%",
      opacity: 0,
      duration: 0.2,

      //  paused: true,
    });
    gsap.to("." + styles.profile_con, {
      display: "none",
      // paused: true,
      opacity: 0,
      duration: 0.2,
      ease: "linear",
    });
  };
  window.onscroll = () => {
    handleCloseUserOptions();
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      try {
        document.querySelector(`.${styles.search_con}`).style.top = "0";
        document.querySelector(`.filter_con`).style.bottom = "-2.5em";
      } catch {}
    } else {
      try {
        document.querySelector(`.${styles.search_con}`).style.top = "-50px";
        document.querySelector(`.filter_con`).style.bottom = "2.5em";
      } catch {}
    }
    prevScrollpos = currentScrollPos;
  };
  return useMemo(() => {
    const drug_list = [
      [
        {
          name: "Amlodipine",
          price: 60000,
          company: "Pfizer",
          pack_size: 30,
          formulation: "Tablet",
        },
        {
          name: "Diazepam",
          price: 30500,
          company: "koko",
          pack_size: 30,
          formulation: "Tablet",
        },
        {
          name: "Paracetamol",
          price: 34000,
          company: "M & B",
          pack_size: 30,
          formulation: "Tablet",
        },
        {
          name: "Amoxicilin",
          price: 53000,
          company: "GSK",
          pack_size: 30,
          formulation: "Tablet",
        },
      ],
      [
        {
          name: "Prednisolone",
          price: 6000,
          company: "GSK",
          pack_size: 30,
          formulation: "Tablet",
        },
        { name: "Vitamin C", price: 500, company: "menka" },
        { name: "Augmentin 228", price: 34000, company: "lonka" },
        { name: "Multivite", price: 53000, company: "loma" },
      ],
      [
        { name: "Lonart DS", price: 60000 },
        { name: "Betnovate C", price: 30500 },
        { name: "Levamisole", price: 34000 },
        { name: "Metronidazole", price: 53000 },
      ],
      [
        { name: "Paracetamol", price: 60000, company: "Emzor" },
        { name: "Vitamin C", price: 30500, company: "Emzor" },
        { name: "Zinc", price: 34000, company: "Emzor" },
        { name: "Metronidazole", price: 53000, company: "Emzor" },
      ],
    ];
    const class_list = {
      class: {
        Antiinfectives: [
          {
            name: "Augmentin 625mg",
            generic_name: "Amoxicilin + Clavulanic Acid",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Ocefix 200mg",
            generic_name: "Cefixim",
            price: 30500,
            company: "meNorKnow",
            pack_size: 1000,
            formulation: "Tablet",
          },
          {
            name: "Axaxim 500mg",
            generic_name: "Cefuroxime",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Beecham 500mg",
            generic_name: "Amoxicillin 500mg",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Emgyl 200mg",
            generic_name: "Metrondazole",
            price: 53000,
            company: "Emzor",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        AntiHypertensives: [
          {
            name: "Norvasc 10mg",
            generic_name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Zenopril 10mg",
            generic_name: "Lisinopril",
            price: 30500,
            company: "kpako",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amlodipine 10mg",
            generic_name: "Amlodipine",
            price: 34000,
            company: "Teva",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Nifecure",
            generic_name: "Nifedipine",
            price: 53000,
            strength: "30mg",
            company: "meNorKnw",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Antidiabetics: [
          {
            name: "Glucophage",
            generic_name: "Metformin",
            price: 60000,
            company: "zanku",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        AntiHistamins: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Antincancer: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Vertigo: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        "Alpha-Blockers": [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        AntiDepressants: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Antispasmodic: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Analgesics: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Anathesia: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
      },
      brands: {
        Emzor: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        GSK: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        "M&B": [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Fidson: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Orange: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Pharmatex: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Pablo: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Lapaz: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Roche: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
      },
      location: {
        Lagos: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Onitcha: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
        Kano: [
          {
            name: "Amlodipine",
            price: 60000,
            company: "Pfizer",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Diazepam",
            price: 30500,
            company: "koko",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Paracetamol",
            price: 34000,
            company: "M & B",
            pack_size: 30,
            formulation: "Tablet",
          },
          {
            name: "Amoxicilin",
            price: 53000,
            company: "GSK",
            pack_size: 30,
            formulation: "Tablet",
          },
        ],
      },
    };

    const handleAddToCart = (qty) => {
      if (qty === 0) {
        alert("Add Quantity");
        return;
      }
      if (qty >= 1) Dispatch(itemAdded());
    };
    const handleAccount = (key) => {
      switch (key) {
        case 0:
          props.history.push("/account/account");
          Dispatch(account({ option: "Account" }));
          break;
        case 1:
          props.history.push("/account/orders");
          Dispatch(account({ option: "Orders" }));
          break;
        case 2:
          props.history.push("/account/wishlist");
          Dispatch(account({ option: "WishList" }));
          break;

        default:
          props.history.push("/account/settings");
          Dispatch(account({ option: "Settings" }));
          break;
      }
    };
    const handleUserOptions = () => {
      gsap.to("." + styles.profile, {
        display: "block",
        x: 0,
        opacity: 1,
        duration: 0.2,
      });
      gsap.to("." + styles.profile_con, {
        display: "block",
        ease: "linear",
      });
    };

    return (
      <div className={styles.group_parent}>
        <div
          style={{ display: isLoading ? "flex" : "none" }}
          className={styles.loader}
          onScroll={(e) => e.preventDefault()}
        >
          <div className={styles.loadingIcon}></div>
        </div>
        <div className={styles.header}>
          <Link to="/">
            <p>DrugMart</p>
          </Link>
          <div onClick={handleUserOptions} className={styles.user}>
            <i className="fa fa-user fa-2x"></i>
          </div>
          <div className={styles.profile}>
            <p onClick={() => handleAccount(0)}>
              <span>
                <i className="fa fa-user"></i>
                <span>My Account</span>
              </span>{" "}
              <i className="fa fa-angle-right"></i>
            </p>
            <p onClick={() => handleAccount(1)}>
              <span>
                <i className="fa fa-box-open"></i>
                <span>My Orders</span>
              </span>{" "}
              <i className="fa fa-angle-right"></i>
            </p>
            <p onClick={() => handleAccount(2)}>
              <span>
                <i className="fa fa-heart heart"></i>
                <span>My WishList</span>
              </span>{" "}
              <i className="fa fa-angle-right"></i>
            </p>

            <p className={styles.logout}>
              <span>LOGOUT</span> <i className="fa fa-sign-out-alt"></i>
            </p>
          </div>
          <div
            onClick={handleCloseUserOptions}
            className={styles.profile_con}
          ></div>
        </div>

        <div className={styles.search_con + " gsapground"}>
          <div className={styles.searchbar_icon_con}>
            <input className={styles.search_bar} type="text" />
            <i className={"fa fa-search " + styles.search_icon}></i>
          </div>
        </div>
        <Route
          path="/description"
          exact
          component={() => (
            <Description {...props} handleAddToCart={handleAddToCart} />
          )}
        />
        <Route path="/Orders" exact component={() => <Orders {...props} />} />

        <Route
          path="/"
          exact
          component={() => <Home drug_list={drug_list} />}
        />
        <Route
          path="/items"
          exact
          component={() => <ItemsList categoryList={[]} {...props} />}
        />
        <Route
          path="/cart"
          exact
          component={() => <CartComponent {...props} />}
        />

        <CategoryMenu class_list={class_list} {...props} />

        <div className={styles.bottom_menu_con}>
          <BottomMenu {...props} />
        </div>
      </div>
    );
  }, [isLoading, props, Dispatch]);
};

export default Mart_Landing;
