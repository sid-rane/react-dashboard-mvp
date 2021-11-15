import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";

function MenuList() {
    const [isActive, setIsActive] = useState('active')
    const onClickHander = (e) => {
        setIsActive({
            isActive: e.target.className
        })
    };

    return (
        <div className="rm-menu-list">
            <ul>
                <li className={isActive} onClick={onClickHander}><Link to="/">Home</Link></li>
                <li onClick={onClickHander}><Link to="/to-do-app">Todo App</Link></li>
                <li onClick={onClickHander}><Link to="/parallax">Parallax</Link></li>
                <li onClick={onClickHander}><Link to="/users">Users</Link></li>
                <li onClick={onClickHander}><Link to="/recipe-search">Recipe Search API</Link></li>
            </ul>

        </div>
    )
}

export default MenuList
