import React from "react";
import arrow from "../Images/arrow.png";

function Arrow(props) {
  return (
    <div className="arrow" id={props.id}>
      <img src={arrow} alt="arrow" />
      {/* <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        height="15"
        width="15"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill={props.fill}
          d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
        ></path>
      </svg> */}
    </div>
  );
}

export default Arrow;
