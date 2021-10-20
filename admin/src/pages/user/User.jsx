import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import './user.css'

export default function User() {
    return (
        <div className="user">
            <div className="userTitileContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/users/new">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                            alt="" 
                            className="userShowImg" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Emma Jones</span>
                            <span className="userShowUserTitle">Sofware Engineer</span>
                        </div> 
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annaems</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">12.05.1972</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">anan@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+233 50712 7654</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Accra | Ghana</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="username" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Fullname</label>
                                <input type="text" placeholder="fullname" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="email" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="phone no" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="address" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                    src="https://images.unsplash.com/photo-1614701466929-766271250d48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                                    alt="" className="userUpdateImg" 
                                />
                                <label htmlFor="file"><Publish className="userUpdateUploadIcon"/></label>
                                <input type="file" name="" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
