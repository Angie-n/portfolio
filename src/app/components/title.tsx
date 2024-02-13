'use client'

import "../styles/title.css";

import { useState, useEffect} from 'react'
 
export default function Title() {
    const binaryMessages = "101010101010010100101010100010100110111010100101010101010001010010101010100001111010010101001010101010101010101010010101010101010010101010100110101010101001010010101010001010011011101010010101010101000101001010101010000111101001010100101010101010101010101001010101010101001010101010011010101010100101001010101000101001101110101001010101010100010100101010101000011110100101010010101010101010101010100101010101010100101010101001";
    const [number, setNumber] = useState(Math.floor(Math.random() * binaryMessages.length));

    const getBinaryText = () => {
        return (
            <p>{binaryMessages.substring(0, number)}<span key={"binary-" + number} className='binary-selected'>{binaryMessages.substring(number, number + 8)}</span>{binaryMessages.substring(number + 8)}</p>
        )
    }

    let text;
    useEffect(() => {
        const timer = setInterval(() => {
            let newNumber = Math.floor(Math.random() * binaryMessages.length);
            if(newNumber === number) newNumber++;
            setNumber(newNumber);
        }, 10000);
        return () => clearInterval(timer);
    }, [number]);

    return (
        <div id='title'>
            <div id='binary'>{getBinaryText()}</div>
            <div id='intro-text'>
                <h1>Hi, I&apos;m Angie</h1>
                <p>Web Developer</p>
            </div>
        </div>
    )
}