import React from 'react'

export const UserDetails = (props) => {
    return (
        <div className="bg-blue-600 sm:h-48 h-28 px-2 rounded-xl">
            {props.children}
        </div>
    )
}
