import React from 'react'

export const CardDetails = (props) => {
    return (
        <div className="bg-purple-900 w-full h-full p-4 rounded-xl hover:bg-purple-600">
            {props.children}
        </div>
    )
}
