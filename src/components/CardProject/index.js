import React from 'react';

import './styles.scss';

const CardProject = props => {
    const { nameProject, description, urlGithub, urlDemo, image } = props;
    return (
        <div className="project">
            <img 
                className="project__image"
                src={image}
                alt={nameProject}
            />
            <p className="project__name">{nameProject}</p>
            <p className="project__description">{description}</p>
            <p className="project__url-github">{urlGithub}</p>
            <p className="project__url-demo">{urlDemo}</p>
        </div>
    );
};

export default CardProject;
