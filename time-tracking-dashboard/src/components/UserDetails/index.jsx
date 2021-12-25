import React from 'react'

export const UserDetails = (props) => {
    return (
        <div className="bg-blue-600 lg:h-52 h-28 px-2 rounded-xl py-3 lg:py-0 flex lg:flex-col">
            {props.children}
        </div>
    )
}
