import classes from './Navbar.module.css';
import brandLogo from '../../img/socialboom logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faComment, faGear, faBurger } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(true);
    if (menu === true) setMenu(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes['nav__wrapper']}>
        <div className={classes['nav__wrapper__internal']}>
          <img src={brandLogo} alt="socialboom brand logo"></img>
          <div className={classes['nav__wrapper__internal__input']}>
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        <div
          className={`${classes['nav__wrapper__menu']} ${
            menu && classes['nav__wrapper__menu--active-on-mobile']
          }`}
        >
          <button className={classes['nav__wrapper__menu__button']}>
            <FontAwesomeIcon icon={faHouse} />
          </button>
          <button className={classes['nav__wrapper__menu__button']}>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button className={classes['nav__wrapper__menu__button']}>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className={`${classes['nav__wrapper__button--burger']} ${
            menu && classes['nav__wrapper__button--burger--active']
          }`}
        >
          <FontAwesomeIcon icon={faBurger} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
