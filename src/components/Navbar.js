import React, { useEffect, useState } from 'react'

import classes from './Navbar.module.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`${classes.navbar} ${show && classes.navbar__black}`}>
            <img
                className={classes.logo}
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img
                className={classes.avatar}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Navbar;