'use client'

import "../styles/socials.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>
const gitHubIcon = <FontAwesomeIcon icon={faGithub}/>
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}/>
 
export default function Socials() {
    return (
        <div id='socials'>
            <a href='mailto:angie.ta.nguyen@gmail.com' target='_blank'>{emailIcon}</a>
            <a href='https://github.com/Angie-n' target='_blank'>{gitHubIcon}</a>
            <a href="https://linkedin.com/in/angie-nguyen-26a80a23a" target='_blank'>{linkedInIcon}</a>
        </div>
    )
}