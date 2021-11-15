import React, { useState, useEffect } from 'react'
import Loader from '../loader/Loader'

const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const getUser = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        setUser(await res.json())
        setLoading(false)
        // .then(res => {
        //     return setUser(res.json())
        // })
        // .catch(err => {
        //     return err
        // })
        // console.log(res)
    }
    useEffect(() => {
        getUser(() => {
            
        })

    }, [])
    console.log(user)
    return (
        <div>
            <div className="container-fluid mt-4">
                <div className="row m-2">
                    {
                        user.length > 0 && user.map((itms, i) => {
                            return (
                                <div key={i} className="card p-3 col-md-3">
                                    <div>
                                        <h6>Name: <strong>{itms.name}</strong></h6>
                                        <h6><small>User Name: {itms.username}</small></h6>
                                        <h6><small>Email: {itms.email}</small></h6>
                                    </div>
                                    <ul className="pl-4">
                                        <li><small><strong>Address:</strong> {itms.address.street}, {itms.address.suite},{itms.address.zipcode}</small> </li>
                                        <li><small><strong>Geo:</strong> {itms.address.geo.lat},{itms.address.geo.lng} </small></li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    {loading && <Loader />}
                </div>
            </div>
        </div>
    )
}

export default UserList
