import React from 'react'

export const Card = (props) => {
    return (
        <div className="bg-pink-400 sm:w-36 sm:h-28 w-44 h-16 m-1 rounded-xl flex-col gap-14">
            {props.children}
        </div>
    )
}
