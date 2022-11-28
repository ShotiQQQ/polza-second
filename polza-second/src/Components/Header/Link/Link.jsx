import React from 'react';

const Link = ({ className, href, imgSrc, alt, children }) => {
    return (
        <a className={className} href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
};

export default Link;