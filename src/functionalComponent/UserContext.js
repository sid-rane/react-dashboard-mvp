import React, { useState, createContext } from 'react'

export const UserContext = createContext();



export const UserProvider = (props) => {
    const [userInput, setUserInput] = useState({
        userName: 'Rajendra Kumar',
        destination: 'UI-UX DEV'
    })
    const [userData, setUserData] = useState([])
    
    return (
        <UserContext.Provider value={[userInput, setUserInput]} value1={[userData, setUserData]} >
            {props.children}
        </UserContext.Provider >
    )
}

