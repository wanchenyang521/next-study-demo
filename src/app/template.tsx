import React from 'react';
import PropTypes from 'prop-types';

const Template = ({children,}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <h1>我是template</h1>
            {children}
        </div>
    );
};

Template.propTypes = {
    
};

export default Template;