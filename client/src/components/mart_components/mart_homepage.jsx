import React from "react";

import Groups from "../reusables/drug_groups";
const Home = (props) => {
  const { drug_list } = props;
  return (
    <>
      <div>
        <Groups title="Antibiotics" drugs={drug_list[0]} />
      </div>
      <div>
        <Groups title="Syrups" drugs={drug_list[1]} />
      </div>
      <div>
        <Groups title="Lagos" drugs={drug_list[2]} />
      </div>
      <div>
        <Groups title="Emzor" drugs={drug_list[3]} />
      </div>
    </>
  );
};
export default Home;
