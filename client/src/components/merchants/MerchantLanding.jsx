import React, { memo } from "react";
import MerchantOptCon from "./MerchantOptCon";
import MerchantStatus from "./MerchantStatus";
function MerchantLanding({ history }) {
  return (
    <>
      <MerchantStatus />
      <MerchantOptCon history={history} />
    </>
  );
}

export default memo(MerchantLanding);
