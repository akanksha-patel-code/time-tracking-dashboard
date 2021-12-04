import React from 'react'

export const Card = (props) => {
    return (
        <div className="bg-pink-400 sm:w-40 sm:h-32 w-72 h-28 m-1 rounded-xl flex-col gap-14">
            {props.children}
        </div>
    )
}
