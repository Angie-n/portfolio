'use client'

import "../styles/projects.css";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import tm1 from '../images/screenshots/triton_marketplace/1.png'
import tm2 from '../images/screenshots/triton_marketplace/2.png'

import im1 from '../images/screenshots/inventory-management/1.png'
import im2 from '../images/screenshots/inventory-management/2.png'
import im3 from '../images/screenshots/inventory-management/3.png'
import im4 from '../images/screenshots/inventory-management/4.png'
import im5 from '../images/screenshots/inventory-management/5.png'

import mo1 from '../images/screenshots/members-only/1.png'
import mo2 from '../images/screenshots/members-only/2.png'
import mo3 from '../images/screenshots/members-only/3.png'
import mo4 from '../images/screenshots/members-only/4.png'

import sc1 from '../images/screenshots/shopping-cart/1.png'
import sc2 from '../images/screenshots/shopping-cart/2.png'
import sc3 from '../images/screenshots/shopping-cart/3.png'
import sc4 from '../images/screenshots/shopping-cart/4.png'

import bs1 from '../images/screenshots/battleship/1.png'
import bs2 from '../images/screenshots/battleship/2.png'
import bs3 from '../images/screenshots/battleship/3.png'
import bs4 from '../images/screenshots/battleship/4.png'

import tl1 from '../images/screenshots/todo-list/1.png'
import tl2 from '../images/screenshots/todo-list/2.png'
import tl3 from '../images/screenshots/todo-list/3.png'
import tl4 from '../images/screenshots/todo-list/4.png'

const folderIcon = <FontAwesomeIcon icon={faFolderOpen}/>

const Project = (title: string, images: string[], description: string[], skills: string[], link: string) => {
    return {title, images, description, skills, link}
}

type Project = {title: string, images: string[], description: string[], skills: string[], link: string};
const imagePath = '../images/' 
 
export default function Projects() {
    //Both currentProject and currentImage refer to an index.
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImage, setCurrentImage] = useState([0, 0]); //first index is last image, second index is current.
    const [isViewing, setIsViewing] = useState(false);
    const Projects = [
        Project("Triton Marketplace", [tm1.src, tm2.src], ["With items sold and sought for by UCSD students split across multiple platforms, my team in UCSD ACM’s Hack Projects set out to create a website where students can post their buying and selling needs. Only those who have been verified to be affiliated with the school can access the site, creating a more secure environment for trading with the removal of anonymity. This was achieved through the MERN stack, with our team split into frontend and backend developers. I was responsible for the backend team and delegated tasks regarding it.", "A challenge I faced in creating the project was the verification system. After consideration, we decided to have students verify their enrollment at UCSD by signing up and logging in with their UCSD email, which only students, faculty, and alumni should have access to. I implemented this feature, initially using NextAuth in order to use Google’s authentication API. However, in order to achieve a clean split between frontend and backend files, I ultimately decided to go with Passport OAuth. With the OAuth, users attempting to log in are directed from the Google sign-in page and then UCSD’s SSO page, adding an extra layer of security before being directed back to our app."], ["HTML", "CSS", "JS", "react", "mongoDB", 'express.js', 'node.js', 'next.js', 'OAuth'], "https://github.com/acmucsd-projects/fa23-hack-team-4"),
        Project("Inventory Management", [im1.src, im2.src, im3.src, im4.src, im5.src], ["In order to practice CRUD operations, I created a pokemon-adoption themed website that allows users to create, read, update, and delete various pokemon, nature, types, and pokemon instances.", "In implementing this, I went with a MVC structure using Express.js, Node.js, Mongoose and pug. I populated the database with the original 151 pokemon using pokeapi, a RESTful API. I also randomly populated the database with pokemon instances based on this data, adding properties tailored for the app such as adoption status.", "A challenge I faced while developing this app was adding a property to be saved in the database that was dependent on other database items. I wanted to be able to determine the value of the property without having to make additional database calls to check the other items. To accomplish this, I learned and implemented post and pre schema middleware, updating the property when there is a database call that needs to be made anyways."], ["HTML", "CSS", "mongoDB", 'express.js', 'node.js', "pug", "api"], "https://github.com/Angie-n/inventory-management"),
        Project("Members Only", [mo1.src, mo2.src, mo3.src, mo4.src], ["In order to practice user authentication, I set out to build an app that would change in functionality if the user is logged in and according to different authentication levels. To keep it simple, authentication levels are granted if the user enters a secret phrase on the appropriate page.", "In implementing this, I went with a MVC structure using Express.js, Node.js, Mongoose and pug. In addition to restricted access to the mongoDB database, I also set conditional statements in the pug templates for different displays depending on the access level. To make the authentication more secure, I also used bcryptJS to hash and salt the users’ passwords. This means that not even I know any account passwords on this site, so feel free to make it as skeptical as you’d like!"], ["HTML", "CSS", "JS", "mongoDB", 'express.js', 'node.js', "pug", "passport.js", "bcrypt"], "https://github.com/Angie-n/members-only"),
        Project("Shopping Cart", [sc1.src, sc2.src, sc3.src, sc4.src], ["To practice React Routing, I developed a fake shop page for a plant business. Users are able to add various products to the cart, which are reflected in their count and charge.", "A challenge I faced in the app was routing, and deciding which React router to use. I initially started with BrowserRouting since it is recommended and used in most React applications. However, I noticed that attempting to share the url of a particular page would not show the product as intended. Since sharing product pages are important for shop pages, I switched to HashRouters, which gave me the functionality I needed."], ["HTML", "CSS", "JS", "react"], "https://github.com/Angie-n/shopping-cart"),
        Project("Battleships", [bs1.src, bs2.src, bs3.src, bs4.src], ["In order to practice testing using jest, I created this site and then tested game board positioning and potential actions from the bot and player.", "The bot has a semi-smart strategy in playing the game, trying all adjacent squares when landing a hit until another is found and also avoiding squares surrounding an already sunk ship (since ships aren’t able to be placed directly next to each other). However, the bot currently does not keep track of ship lengths, leading to inefficient shots in areas that the remaining ships may not be able to fit into.", "A challenge I faced while creating the app was implementing an intuitive way for users to position their ships. I decided to use the HTML Drag and Drop API, which (while limited on mobile) allows users to drag HTML elements and place them within other elements. I also used mouse events to make it clear which positions were possible as well as highlight the current location of the drop."], ["HTML", "CSS", "JS", "jest"], "https://github.com/Angie-n/battleship"),
        Project("Todo List", [tl1.src, tl2.src, tl3.src, tl4.src], ["In order to practice using localStorage to store user session information in the frontend and get used to DOM manipulation, I created a todo app where users can organize their tasks into projects, assign them priority levels, and view what they need for the current day and week.", "A challenge I ran into was accounting for each possible user interaction and how it would affect how the todos are arranged. For example, a user may want to change the current date of a todo, which additionally changes whether the item is eligible in “today” and “this week” sections. While simple features, adding each led to more nuances to consider."], ["HTML", "CSS", "JS", "localStorage"], "https://github.com/Angie-n/todo-list"),
    ];
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
            <div key={"project-card-" + index} onClick={e => {setIsViewing(true); setCurrentProject(index); setCurrentImage([0, 0])}} className='project-card'>
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
                    <div>{project.description.map((s, i) => {return <p key={'project-' + index + '-description-' + i}>{s}</p>})}</div>
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