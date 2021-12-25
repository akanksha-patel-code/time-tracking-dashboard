import React from 'react';

export const UserProfile = (props) => {
    return (
        <div className="mx-10 sm:mx-72 sm:h-80 sm:w-40 w-72 h-44 border-0 font-body rounded-xl bg-indigo-900 sm:grid-cols-1">
            {props.children}
        </div>
    )
}
