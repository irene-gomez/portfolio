import React from 'react';
import TitleSection from '../TitleSection';
import CardProject from '../CardProject';
import { infoProjects } from '../../services/infoProjects';

import './styles.scss';

const Projects = () => {
    return ( 
        <section className="section section-first">
            <TitleSection  title='Proyectos' />
            <ul className="projects-list">
                {infoProjects.map(project => (
                    <li key={project.id}>
                        <CardProject 
                            nameProject={project.name}
                            description={project.description}
                            urlGithub={project.urlGithub}
                            urlDemo={project.urlDemo}
                            image={project.image}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
 
export default Projects;