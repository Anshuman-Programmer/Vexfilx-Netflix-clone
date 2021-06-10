import React, { useRef, useState } from 'react'
import './_signUpScreen.scss'
import { auth } from "../../firebase";

function SignUpScreen() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [signUp, setSignUp] = useState(false)

    const guest = (e) => {

        e.preventDefault()

        auth.signInWithEmailAndPassword(
            "nelefe9894@sc2hub.com","123456"
        )
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
        })
    };

    const signIn = (e)=>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <div className="signUpScreen">
            <form autoComplete="off">
                <h1>{!signUp ? "Sign In" : "Resister Now"}</h1>
                <input ref={emailRef} placeholder="Email or Phone number" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>

                {!signUp ? (<button type="submit" onClick={signIn} >Sign In</button>) :
                (<button type="submit" onClick={register} >Resister Now</button>)}

                <button type="submit" onClick={guest} >View as a guest</button>
                

                <h4><span className="signUpScreen__gray">{!signUp ? "New on VexFlix? " : "Already a member?"}</span> <span onClick={()=>setSignUp(!signUp)} className="signUpScreen__link">{!signUp ? "Resister Now" : "Sign In"}</span></h4>
            </form>
        </div>
    )
}

export default SignUpScreen

