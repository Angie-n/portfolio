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
                <a href="https://drive.google.com/file/d/1jnFSutUyeVc4onO_kF7h1aJphw2Ar63P/view?usp=sharing" target="_blank">{element}</a>
            </div>
        </div>
    )
}