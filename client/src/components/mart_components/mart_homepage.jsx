import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Groups from "../reusables/drug_groups";
const Home = ({ history }) => {
  const items = useSelector((state) => state.entities.category);
  console.log(history);

  return (
    <>
      <div>
        <Groups title="Clothes" history={history} items={items.clothes} />
      </div>
      <div>
        <Groups
          title="Electronics"
          history={history}
          items={items.electronics.slice(0, 4)}
        />
      </div>
      <div>
        <Groups
          title="Furnitures"
          history={history}
          items={items.furnitures.slice(0, 4)}
        />
      </div>
    </>
  );
};
export default Home;
