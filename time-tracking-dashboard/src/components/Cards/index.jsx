import React from 'react';

export const Cards = (props) => {
    return (
        <div className="bg-yellow-400 h-72 w-11/12 grid grid-cols-2 -ml-52">
            {props.children}
        </div>
    )
}
