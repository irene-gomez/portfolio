import React from 'react';
import ReactGA from 'react-ga';
import { initGA } from '../../services/reactGA';
import TitleSection from '../TitleSection';
import CardProject from '../CardProject';
import infoProjects from '../../services/infoProjects';

import './styles.scss';

class Projects extends React.Component {
    componentDidMount() {
        initGA();
        ReactGA.pageview('/projects');
    }

    render() {
        return ( 
            <section className="section section-first">
                <TitleSection  title='Proyectos' />
                <ul className="projects-list">
                    {infoProjects.projects.map(project => (
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
}
 
export default Projects;