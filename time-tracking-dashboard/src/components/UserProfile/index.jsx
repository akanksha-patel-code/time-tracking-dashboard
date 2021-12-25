import React from 'react';

export const UserProfile = (props) => {
    return (
        <div className="mx-10 lg:mx-44 lg:my-1 xl:my-0 xl:mx-72 lg:h-80 lg:w-40 w-72 h-44 border-0 font-body rounded-xl bg-indigo-900 lg:grid-cols-1 flex flex-col">
            {props.children}
        </div>
    )
}
