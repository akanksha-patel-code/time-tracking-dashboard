import React from "react";

export const Cards = (props) => {
  return (
    <div className="sm:h-72 sm:w-4/5 sm:grid sm:grid-cols-3 sm:-ml-72 ml-8 pt-4 sm:pt-0 flex flex-col gap-8">
      {props.children}
    </div>
  );
};
