import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './_nav.scss'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'

function Nav() {

    const [show, hendleShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () => {
        if(window.scrollY > 150){
            hendleShow(true)
        }else{
            hendleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return()=> window.removeEventListener("scroll", transitionNavBar);
    }, [])


    return (
        <div className={ `nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img onClick={()=>history.push("/")} className="nav__logo" src={logo} alt="nav-logo"/>

                <img onClick={()=>history.push("/profile")}
                className="nav__avater" src={avatar} alt="avater"/>


            </div>
        </div>
    )
}

export default Nav
