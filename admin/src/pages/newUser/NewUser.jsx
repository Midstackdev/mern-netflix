import React from 'react'

import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
             <h1 className="newUserTitle">New user</h1>
             <form className="newUserForm">
                 <div className="newUserItem">
                     <label htmlFor="">Username</label>
                     <input type="text" placeholder="username" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Fullname</label>
                     <input type="text" placeholder="Fullname" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Email</label>
                     <input type="email" placeholder="Email" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Password</label>
                     <input type="password" placeholder="Password" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Phone</label>
                     <input type="text" placeholder="phone no" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Address</label>
                     <input type="text" placeholder="address" />
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Gender</label>
                     <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                     </div>
                 </div>
                 <div className="newUserItem">
                     <label htmlFor="">Active</label>
                     <select name="active" id="active" className="newUserSelect">
                         <option value="yes">Yes</option>
                         <option value="no">No</option>
                     </select>
                 </div>
                 <button className="newUserButton">Add</button>
             </form>
        </div>
    )
}
