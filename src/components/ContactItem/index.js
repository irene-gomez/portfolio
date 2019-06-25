import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ContactItem = props => {
    const { hrefInfo, icon } = props;
    return (
        <li className="contact__item">
            <a className="contact__link" href={hrefInfo} target="_blank" rel="noopener noreferrer">
                <span className={`contact__image ${icon}`} />
            </a>
        </li>
    );
};

ContactItem.propTypes = {
    hrefInfo: PropTypes.string,
    icon: PropTypes.string,
};

export default ContactItem;
