import React from "react";

export const Cards = (props) => {
  return (
    <div className="h-72 w-4/5 sm:grid sm:grid-cols-3 -ml-72 flex-col">
      {props.children}
    </div>
  );
};
