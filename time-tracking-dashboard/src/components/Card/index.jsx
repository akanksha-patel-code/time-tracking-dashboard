import React from 'react'

export const Card = (props) => {
    return (
        <div className="bg-pink-400 sm:w-40 sm:h-32 sm:mb-2 w-72 h-28 m-2 sm:m-0 rounded-xl flex-col gap-16">
            {props.children}
        </div>
    )
}
