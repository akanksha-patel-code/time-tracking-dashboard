import React from 'react'

export const Card = (props) => {
    return (
        <div className="bg-pink-400 w-44 h-32">
            {props.children}
        </div>
    )
}
