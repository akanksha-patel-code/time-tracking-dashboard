import React from 'react'

export const UserDetails = (props) => {
    return (
        <div className="bg-blue-600 sm:h-52 h-28 px-2 rounded-xl py-3 sm:py-0 flex sm:flex-col">
            {props.children}
        </div>
    )
}
