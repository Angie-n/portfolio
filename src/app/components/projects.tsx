'use client'

import "../styles/projects.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const folderIcon = <FontAwesomeIcon icon={faFolderOpen}/>

const Project = (title: string, images: string[], description: string, skills: string[], link: string) => {
    return {title, images, description, skills, link}
}

type Project = {title: string, images: string[], description: string, skills: string[], link: string};
const imagePath = '../images/' 
 
export default function Projects() {
    //Both currentProject and currentImage refer to an index.
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImage, setCurrentImage] = useState([0, 0]); //first index is last image, second index is current.
    const [isViewing, setIsViewing] = useState(false);
    const Projects = [Project("", [""], "", [""], "")];
    const ProjectCards = Projects.map((p, i) => ProjectCard(p, i));
    const ProjectAbouts = Projects.map((p, i) => ProjectAbout(p, i));

    useEffect(() => {
        if(isViewing) {
            let images = Array.from(document.getElementsByClassName('preview-item') as HTMLCollectionOf<HTMLElement>);
            let width = images[0].clientWidth;
            images[currentImage[0]].classList.remove("selected-preview");
            images[currentImage[1]].classList.add("selected-preview");
                for(let i = 0; i < images.length; i++) {
                    let desiredPosition = -currentImage[1] * width;
                    let position = -currentImage[0] * width;
                    let id = setInterval(() => {
                        if (position == desiredPosition) {
                            clearInterval(id);
                        } 
                        else {
                            if(position > desiredPosition) position = position - 1;
                            else if (position < desiredPosition) position = position + 1;
                            images[i].style.left = position + 'px';
                        }
                    }, 10);
            }
        }
    }, [currentImage]);

    function ImagePreview() {
        let images = Projects[currentProject].images;
        function addImageDiv(index: number) {
            if(index >= 0 && index < images.length) return <img key={"project-" + currentProject + "actual-img-" + index} className="actual-image preview-item" src={images[index]} onClick={e => {if(index != currentImage[1])setCurrentImage([currentImage[1], index])}}></img>
            return <div className="image-placeholder preview-item"></div>
        }

        let placeholder = [];
        for(let i = 3; i > images.length && i > 1; i--) placeholder.push("");
    
        return (
            <div className="preview-images">{images.map((image, i) => addImageDiv(i))}{placeholder.map((p, i) => <div key={"project-" + currentProject + '-image-placholder-' + i} className="image-placeholder preview-item"></div>)}</div>
        );
    }

    function ProjectCard(project: Project, index: number) {
        return (
            <div key={"project-card-" + index} onClick={e => {setIsViewing(true); setCurrentProject(index); setCurrentImage([0, 0])}} className='project-card' style={{backgroundImage: 'url(' + project.images[0] + ')'}}>
                <div className="card-darkener" onMouseEnter={(e) => {if(e.target instanceof HTMLElement) e.target.classList.add('darken')}} onMouseLeave={(e) => {if(e.target instanceof HTMLElement) e.target.classList.remove('darken')}}></div>
                <div className='project-card-info'><h3>{project.title}</h3></div>
            </div>
        )
    }

    function ProjectAbout(project: Project, index: Number) {
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
                    <p>{project.description}</p>
                </div>
                <button className="project-exit" onClick={e => {setIsViewing(false);}}>X</button>
            </div>
        )
    }

    function ConditionalCurrent() {
        console.log(currentImage);
        if(isViewing) return ProjectAbouts[currentProject];
        return <></>
    } 

    return (
        <div id='project'>
            <h2>WHAT I&apos;VE MADE</h2>
            <div id='project-info'>
                {ProjectCards.map(p => p)}
            </div>
            <ConditionalCurrent></ConditionalCurrent>
        </div>
    )
}