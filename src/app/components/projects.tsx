'use client'

import "../styles/projects.css";

import Link from 'next/link'

import {Project, Projects} from '@/app/helpers/project';
 
export default function ProjectsContainer() {
    const ProjectCards = Projects.map((p, i) => ProjectCard(p, i));

    function ProjectCard(project: Project, index: number) {
        return (
            <Link href={"/projects/" + index} key={"project-card-" + index} className='project-card'>
                    <div className='project-card-info'><h3>{project.title}</h3></div>
            </Link>
        )
    }

    return (
        <div id='project'>
            <h2>WHAT I&apos;VE MADE</h2>
            <div id='project-info'>
                {ProjectCards.map(p => p)}
            </div>
        </div>
    )
}