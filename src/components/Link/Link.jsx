import React from 'react';
import styles from './Link.module.scss';

const link = ({to, children, type, className}) => {
    return (
        <a href={to} className={`${styles[type]} ${className}`}>{children}</a>
    )
}

export default link;