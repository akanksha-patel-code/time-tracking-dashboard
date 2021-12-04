import React from 'react';

export const UserProfile = (props) => {
    return (
        <div className="mx-10 sm:mx-40 sm:h-72 sm:w-36 w-80 h-44 border-0 rounded-xl bg-indigo-900 sm:grid-cols-1">
            {props.children}
        </div>
    )
}
