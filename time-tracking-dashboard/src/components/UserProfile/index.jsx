import React from 'react';

export const UserProfile = (props) => {
    return (
        <div className="mx-40 h-72 w-36 border-0 rounded-xl bg-indigo-900 grid-cols-1">
            {props.children}
        </div>
    )
}
