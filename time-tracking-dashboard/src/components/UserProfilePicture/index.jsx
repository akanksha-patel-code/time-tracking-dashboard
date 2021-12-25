import React from 'react'
import image from '../../images/image-geremy.png'

export const UserProfilePicture = () => {
    return (
        <div className="pl-4 pt-4 inline lg:block">
             <img alt="profile" src={image} className="bg-indigo-50 w-14 h-14 rounded-3xl inline lg:block flex-shrink" />
        </div>
       
    )
}
