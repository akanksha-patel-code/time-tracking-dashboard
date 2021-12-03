import React from 'react'

export const CardDetails = (props) => {
    return (
        <div className="bg-purple-900 w-full h-full p-4 rounded-xl ">
            {props.children}
        </div>
    )
}
