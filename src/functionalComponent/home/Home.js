import React, { useState, useEffect, useContext } from 'react'
import Profile from '../Profile'

import { UserContext } from '../UserContext'

function Home() {
    // const { useSubmitHaandel } = useContext(UserContext)

    const [userInput, setUserInput] = useContext(UserContext)
    const [userData, setUserData] = useContext(UserContext)

    const onchangeHandler = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const useSubmitHaandel = (e) => {
        e.preventDefault()
        const nwUserData = { ...userInput, id: new Date().getTime().toString() }
        console.log(nwUserData)
    }

    return (
        <div className="rm-profile">
            <h4>Profile</h4>
            <form action="" onSubmit={useSubmitHaandel}>
                <input
                    type="text"
                    className="mb-2 form-control"
                    placeholder="UserName"
                    name="userName"
                    value={userInput.userName}
                    onChange={onchangeHandler}
                />
                <input
                    type="text"
                    className="mb-2 form-control"
                    placeholder="destination"
                    name="destination"
                    value={userInput.destination}
                    onChange={onchangeHandler}
                />
                <button type="submit" className="btn btn-outline-success">Submt</button>

            </form>
        </div>
    )
}

export default Home

