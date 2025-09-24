import React from 'react';
import PropTypes from 'prop-types';

const Template = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>

            {children}
        </div>
    );
};

Template.propTypes = {
    
};

export default Template;