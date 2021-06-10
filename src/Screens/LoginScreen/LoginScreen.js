import React, { useState} from 'react'
import './_loginScreen.scss'
import SignUpScreen from '../SignUpScreen/SignUpScreen'
import Question from "../../components/Question/Question";
import logo from '../../assets/images/logo.png'
import tv from '../../assets/images/tv.png'
import mobile from '../../assets/images/mobile.jpg'
import device from '../../assets/images/device.png'
import children from '../../assets/images/childrens.png'


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={logo} alt="logo" />
                <button className="loginScreen__button" onClick={() => setSignIn(!signIn)}>Sign In</button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">

                {signIn ? (<SignUpScreen />) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button className="loginScreen__getStarted" onClick={() => setSignIn(!signIn)}>GET STARTED </button>
                            </form>
                        </div>
                    </>
                )}

            </div>


            <div className="loginScreen__divider" />
            <div className="loginScreen__aboutUs">
                <div className="loginScreen__aboutUsDetails">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                    </p>
                </div>
                <div className="loginScreen__aboutUsImage">
                    <div className="loginScreen__video">
                        <img src={tv} alt="Image" />

                    </div>
                </div>
            </div>


            <div className="loginScreen__divider" />
            <div className="loginScreen__aboutUs">

                <div className="loginScreen__aboutUsImage">
                    <div className="loginScreen__video">
                        <img src={mobile} alt="Image" />

                    </div>
                </div>
                <div className="loginScreen__aboutUsDetails">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.
                    </p>
                </div>

            </div>


            <div className="loginScreen__divider" />
            <div className="loginScreen__aboutUs">
                <div className="loginScreen__aboutUsDetails">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
                </div>
                <div className="loginScreen__aboutUsImage">
                    <div className="loginScreen__video">
                        <img src={device} alt="Image" />

                    </div>
                </div>
            </div>


            <div className="loginScreen__divider" />
            <div className="loginScreen__aboutUs">

                <div className="loginScreen__aboutUsImage">
                    <div className="loginScreen__video">
                        <img src={children} alt="Image" />

                    </div>
                </div>
                <div className="loginScreen__aboutUsDetails">
                    <h1>Create profiles for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                    </p>
                </div>

            </div>


            <div className="loginScreen__divider" />
            <div className="loginScreen__questions">
                <h1>Frequently Asked Questions</h1>
                <Question question="What is Vexflix?" answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"/>

                <Question question="How much does the Vexflix cost?" answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts." />

                <Question question="Where can I watch?" answer="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."/>

                <Question question="How do I cencel?" answer="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />

                <Question question="What can I watch in Vexflix?" answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />

                <Question question="Is Vexflix good for kids?" answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."/>
            </div>

            <div className="loginScreen__input2">
                <p>Ready to watch? Enter your email to create or restart your membership.
                    </p>
                <form>

                    <input type="email" placeholder="Email Address" />
                    <button className="loginScreen__getStarted2" onClick={() => setSignIn(!signIn)}>GET STARTED </button>
                </form>
            </div>

            <div className="loginScreen__divider" />
            <footer>
                <div className="footer_block">
                    <h2>Questions? Call 000-800-040-1843</h2>
                    <div className="footer__links">
                        <ul>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                        <ul>
                            <li>Help Centre</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                        <ul>
                            <li>Account</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Netflix Originals</li>
                        </ul>
                        <ul>
                            <li>Media Centre</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <h2>Vexflix India</h2>
                </div>
                
            </footer>
        </div>
    )
}

export default LoginScreen
