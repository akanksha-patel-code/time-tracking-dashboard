import React from "react";

export const Card = (props) => {
  return (
    <div className="bg-pink-400 lg:w-40 lg:h-32 lg:mb-2 w-72 h-28 m-2 xl:m-0 rounded-xl flex-col gap-16">
      {props.children}
    </div>
  );
};
