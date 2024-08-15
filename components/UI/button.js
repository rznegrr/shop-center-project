import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className={`text-info bg-info100 py-1 px-2 md:px-3 md:py-2 text-2xs md:text-xs rounded-lg flex gap-x-1 ${props.className}`}
      >
        {props.icon}{props.name}
      </button>
    </div>
  );
}

export default Button;
