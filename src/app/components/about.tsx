'use client'

import "../styles/about.css";
import profilePic from '../images/profile.png'
 
export default function About() {
    return (
        <div id='about'>
            <h2>WHO I AM</h2>
            <div id='about-info'>
                <img src={profilePic.src} alt="Photo of me"/>
                <p>Hi there, my name is Angie Nguyen and I’m currently a UCSD student majoring in computer science. I believe the best way to learn is through getting hands-on experience, and so I’m always eager to work on new projects. While I have the self-drive to learn on my own and follow through on solo projects, I am always looking for opportunities to get involved and have joined teams on campus.</p>
            </div>
        </div>
    )
}