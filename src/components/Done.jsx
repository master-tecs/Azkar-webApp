import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { IconButton } from "@material-ui/core";
import "./Done.css";

function Done({ history }) {
  return (
    <div className="azkarDone">
      <div className="azkarDone__head">
        <IconButton className="btm__skipIcon" onClick={() => history.goBack()}>
          <ArrowBackIcon className="btm__skipIcon--back" />
        </IconButton>
      </div>
      <div className="azkar__Done">
        <h1>End of the Azkar</h1>
      </div>
    </div>
  );
}

export default Done;
