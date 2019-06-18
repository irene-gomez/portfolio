import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TitleSection = props => {
    const { title } = props;
    return ( 
        <h2 className="section-title">{title}</h2>
    );
};

TitleSection.propTypes = {
    title: PropTypes.string.isRequired,
};
 
export default TitleSection;