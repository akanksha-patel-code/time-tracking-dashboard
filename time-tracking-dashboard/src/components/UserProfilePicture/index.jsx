import React from 'react'
import image from '../../images/image-geremy.png'

export const UserProfilePicture = () => {
    return (
        <div className="pl-4 pt-4">
             <img alt="profile" src={image} className="bg-indigo-50 w-10 h-10 rounded-3xl" />
        </div>
       
    )
}
