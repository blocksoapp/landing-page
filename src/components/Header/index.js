import React, { useState } from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/img/logo.svg';
import menu from '../../assets/img/menu.svg';
import close from '../../assets/img/close.svg';
import SocialLinks from '../SocialLinks';
import MobileMenu from '../MobileMenu';

function Header() {
    const [isMenuOpened, setMenuOpened] = useState(false);

    return (
        <>
            <header className={classes.header}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className={classes.right}>
                        <div className={classes.nav}>
                            <a href="#">Home</a>
                            <a href="#features">Features</a>
                            {/*<a href="#blog">Blog</a>*/}
                            <a href="#testimonials">Testimonials</a>
                        </div>
                        <SocialLinks />
                        <button className={classes.launchBtn}>
                            <a href="https://app.blockso.fun">Launch App</a>
                        </button>
                    </div>
                    <button className={classes.menuBtn} onClick={() => setMenuOpened(p => !p)}>
                        <img src={isMenuOpened ? close : menu} alt='menu-btn' />
                    </button>
                </div>
            </header>
            {isMenuOpened && <MobileMenu setMenuOpened={setMenuOpened} />}
        </>
    )
}

export default Header;
