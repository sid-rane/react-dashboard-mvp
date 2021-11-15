import React from 'react'
import MenuList from './MenuList'
import Profile from './Profile'
import { UserProvider } from './UserContext'

function SidebarMenu() {
    return (
        <div className="rm-slidebarmenu">
            <UserProvider>
                <Profile  />
                <MenuList />
            </UserProvider>
        </div>
    )
}

export default SidebarMenu
