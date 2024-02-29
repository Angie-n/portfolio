'use client'

import "./project.css"

import Link from 'next/link'
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { notFound } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
const folderIcon = <FontAwesomeIcon icon={faFolderOpen}/>

import {Project, Projects} from '@/app/helpers/project';

export default function ProjectContainer() { 
    const index = parseInt(usePathname().substring(usePathname().lastIndexOf('/') + 1));
    if(isNaN(index) || index < 0 | index >= Projects.length) notFound();

    const project = Projects[index];
    const images = project.images;
    const [currentImage, setCurrentImage] = useState([0, 0]); //first index is last image, second index is current.
    
    useEffect(() => {
        let imagesDOM = Array.from(document.getElementsByClassName('preview-item'));
        if(imagesDOM.length > 0) {
            let width = imagesDOM[0].clientWidth;
            imagesDOM[currentImage[0]].classList.remove("selected-preview");
            imagesDOM[currentImage[1]].classList.add("selected-preview");
            for(let i = 0; i < imagesDOM.length; i++) {
                let desiredPosition = -currentImage[1] * width;
                let position = -currentImage[0] * width;
                let id = setInterval(() => {
                    if (position == desiredPosition) {
                        clearInterval(id);
                    } 
                    else {
                        if(position > desiredPosition) position = position - 1;
                        else if (position < desiredPosition) position = position + 1;
                        imagesDOM[i].style.left = position + 'px';
                    }
                }, 10);
            }
        }
    }, [currentImage]);

    function ImagePreview() {
        function addImageDiv(imageIndex) {
            if(imageIndex >= 0 && imageIndex < images.length) return <img key={"project-" + index + "actual-img-" + imageIndex} className="actual-image preview-item" src={images[imageIndex]} onClick={e => {if(imageIndex != currentImage[1])setCurrentImage([currentImage[1], imageIndex])}}></img>
            return <div className="image-placeholder preview-item"></div>
        }

        let placeholder = [];
        for(let i = 3; i > images.length && i > 1; i--) placeholder.push("");
    
        return (
            <div className="preview-images">{images.map((image, i) => addImageDiv(i))}{placeholder.map((p, i) => <div key={"project-" + index + '-image-placholder-' + i} className="image-placeholder preview-item"></div>)}</div>
        );
    }

    function ProjectAbout() {
        return (
            <div key={"project-about-" + index} className='project-about'>
                <h3>{project.title}</h3>
                <div className="project-about-info">
                    <div>
                        <div className="image-slider">
                            <div className="current-image" style={{backgroundImage: "url(" + project.images[currentImage[1]] + ")"}}>
                                <div className='current-image-transition'></div>
                            </div>
                            <div className="preview-control"><button onClick={e => {if(currentImage[1] > 0) setCurrentImage([currentImage[1], currentImage[1] - 1])}}>&lt;</button><ImagePreview></ImagePreview><button onClick={e => {if(currentImage[1] < project.images.length - 1) setCurrentImage([currentImage[1], currentImage[1] + 1])}}>&gt;</button></div>
                        </div>
                        <ul>{project.skills.map((s,i) => {return <li key={'project-' + index + '-skills-' + i}>{s}</li>})}</ul>
                        <a href={project.link} target="_blank"><p>DIVE INSIDE</p> {folderIcon}</a>
                    </div>
                    <div>{project.description.map((s, i) => {return <p key={'project-' + index + '-description-' + i}>{s}</p>})}</div>
                </div>
                <Link href={"/#project"}><button className="project-exit">X</button></Link>
            </div>
        )
    }

    return <ProjectAbout></ProjectAbout>
}