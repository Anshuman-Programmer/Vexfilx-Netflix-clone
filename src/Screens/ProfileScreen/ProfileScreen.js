import React from 'react'
import { useSelector } from 'react-redux';
import Nav from "../../components/Nav/Nav";
import { selectUser } from '../../features/userSlice';
import { auth } from "../../firebase";
import './_profileScreen.scss'

function ProfileScreen() {

    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profilescreen__info">
                    <img src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg" alt="avater"/>
                    <div className="profilescreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">

                            <button onClick={()=>auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default ProfileScreen
