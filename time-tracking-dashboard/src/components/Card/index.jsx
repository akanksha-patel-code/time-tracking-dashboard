import React from 'react'

export const Card = (props) => {
    return (
        <div className="bg-pink-400 w-36 h-28 m-1 rounded-xl">
            {props.children}
        </div>
    )
}
