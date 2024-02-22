'use client'

import "../styles/resume.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowRight}/>
 
export default function Resume() {
    return (
        <div id='resume'>
            <div id='resume-info'>
                <h2>Check out my Resume!</h2>
                <a href="https://drive.google.com/file/d/17id03vSmrOHZa4WSv1IJpx_HRoa_ozLY/view?usp=sharing" target="_blank">{element}</a>
            </div>
        </div>
    )
}