import React from "react";

export const Cards = (props) => {
  return (
    <div className="lg:h-72 lg:w-4/5 lg:grid lg:grid-cols-3 lg:gap-x-32 lg:gap-y-5 xl:gap-9 lg:-ml-32 ml-8 pt-4 lg:pt-0 flex flex-col gap-8">
      {props.children}
    </div>
  );
};
