import React from 'react';
import './modal.scss';

const Modal = ({ children, className, onClick }) => {
    return (
        <div id='modal' className={className} onClick={onClick}>
            {children}
        </div>
    );
};

export default Modal;