import React from 'react';
import classes from './Footer.module.scss';
import logo from '../../assets/img/logo.svg';
import SocialLinks from '../SocialLinks';

function Footer() {

  return (
    <footer className={classes.footer}>
      <img src={logo} className={classes.logo} alt='logo' />
      <div className={classes.desc}>
        with <span>❤</span>
      </div>
      <div className={classes.footerBar}>
        <div className={classes.left}>
          blockso. all rights reserved
        </div>
        {/*
        <div className={classes.middle}>
          <a href='/'>Terms of Service</a>
          <a href='/'>Privacy Policy</a>
        </div>
        */}
        <div className={classes.right}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
