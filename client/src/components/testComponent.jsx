import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bugAdded } from "../../src/model/store/bugs";

const TestComponent = (props) => {
  const bugg = useSelector((state) => state.entities.bugs);
  const bugs = useDispatch();
  useEffect(() => {
    bugs(bugAdded({ description: "i vant to suxk breast" }));
    bugs(bugAdded({ description: "i vant to suxk breast" }));
    bugs(bugAdded({ description: "i vant to suxk breast" }));
  }, [bugs]);
  return (
    <div>
      {bugg.map((bug) => (
        <p>{bug.description}</p>
      ))}
    </div>
  );
};

export default TestComponent;
