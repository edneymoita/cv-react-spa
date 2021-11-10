import React from "react";
import star from "../Images/star.png";

function Mark(props) {
  return (
    <div className="mark">
      <img src={star} alt="star" />
      {/* <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        height="24"
        width="24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill={props.fill}
          d="M11.999 1.993c-5.514.001-10 4.487-10 10.001s4.486 10 10.001 10c5.513 0 9.999-4.486 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8s3.589-8 8-8.001C16.411 3.994 20 7.583 20 11.994c-.001 4.411-3.59 8-8 8z"
        ></path>
        <path
          fill={props.fill}
          d="M12 10.994H8v2h4V16l4.005-4.005L12 7.991z"
        ></path>
      </svg> */}
    </div>
  );
}

export default Mark;
