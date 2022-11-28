import React from 'react';

const Title = ({ className, children }) => {
    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default Title;