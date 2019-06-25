import React from 'react';

import './styles.scss';

const CardProject = props => {
    const { nameProject, description, urlGithub, urlDemo, image } = props;
    return (
        <article className="project">
            <img className="project__image" src={image} alt={nameProject} />
            <div className="wrapper__info">
                <h1 className="project__name">{nameProject}</h1>
                <p className="project__text description">{description}</p>
                <div className="wrapper__url">
                    <a
                        href={urlGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__url"
                    >
                        Código
                    </a>
                    <a
                        href={urlDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__url"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </article>
    );
};

export default CardProject;
