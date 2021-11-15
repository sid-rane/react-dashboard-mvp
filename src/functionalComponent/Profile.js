import React, { useContext, useState } from 'react'
import ProfilePic from '../assets/imgaes/user.jpg'
import { UserContext } from './UserContext'



function Profile({ userName, destination }) {

    const [userData, setUserData] = useContext(UserContext)

    console.log(userData.userName)
    return (
        <div className="rm-profile">
            <div className="profile-pic">
                <img src={ProfilePic} alt="" />
            </div>
            <h5>{userName}</h5>
            <h6>{destination}</h6>
            <ul>
                <li><a href="#">Message</a></li>
                <li><a href="#" className="conn">Connect</a></li>
            </ul>
        </div>
    )
}

export default Profile