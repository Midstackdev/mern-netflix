import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? `navbar scrolled` : `navbar`}>
            <div className="container">
                <div className="left">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="" className="logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
