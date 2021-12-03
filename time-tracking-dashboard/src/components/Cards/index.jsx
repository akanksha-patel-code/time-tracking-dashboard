import React from "react";

export const Cards = (props) => {
  return (
    <div className=" h-72 w-full grid grid-cols-3 -ml-72">
      {props.children}
    </div>
  );
};
