import { Visibility } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './widgetSm.css'

export default function WidgetSm() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get(`users?new=true`)
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Joined Members</span>
            <ul className="widgetSmList">
                {
                    users?.map(user => (

                        <li className="widgetSmListItem" key={user._id}>
                            <img src={user.profilePic} 
                                alt="" className="widgetSmImg" 
                            />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                                <span className="widgetSmUserTitle">{new Date(user.createdAt).toDateString()}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Dispalay
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
