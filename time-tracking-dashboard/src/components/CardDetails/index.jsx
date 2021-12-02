import React from 'react'

export const CardDetails = (props) => {
    return (
        <div className="bg-purple-900 w-full h-full rounded-xl p-4 ">
            {props.children}
        </div>
    )
}
