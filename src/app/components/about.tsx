'use client'

import "../styles/about.css";
import profilePic from '../images/profile.png'
 
export default function About() {
    return (
        <div id='about'>
            <h2>WHO I AM</h2>
            <div id='about-info'>
                <img src={profilePic.src} alt="Photo of me"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis tincidunt, maximus justo ut, hendrerit lacus. Vestibulum posuere sodales auctor. Aliquam id risus ut lorem tincidunt facilisis. Vestibulum vestibulum pharetra imperdiet. Donec vulputate eleifend risus, congue egestas dui tempus sed. In eget commodo turpis. Integer et enim enim. Suspendisse euismod elit eros, in lacinia lectus posuere quis. Sed lobortis sapien neque, nec tempus lorem finibus at. Duis venenatis lorem ut sem varius, ut convallis ipsum mollis.</p>
            </div>
        </div>
    )
}