import React from "react";

function UserOptions({ handleAccount, arrg, option, icon }) {
  return (
    <>
      {" "}
      <p onClick={() => handleAccount(arrg)}>
        <span>
          <i className={"fa fa-" + icon}></i>
          <span>{option}</span>
        </span>{" "}
        <i className="fa fa-angle-right"></i>
      </p>
    </>
  );
}

export default UserOptions;
