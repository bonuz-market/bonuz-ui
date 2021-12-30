import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import { Navigation } from '../../atoms';
import './header.scss';
import logo from '/src/assets/images/logo.svg';
import logoHover from '/src/assets/images/logo_2.svg';
import burgerIcon from '/src/assets/images/burger.svg';
import arrowIcon from '/src/assets/images/arrow.svg';
import arrowGradientIcon from '/src/assets/images/f_i.svg';
import mobileNavigationBackground from '/src/assets/images/menu_bg.svg';

const Signup: FC = () => (
  <div className="sign-up">
    <a href="#">
      <span>Sign Up</span>
    </a>
  </div>
);

type HeaderProps = {
  LanguageSelector?: FC;
};
export const Header: FC<HeaderProps> = ({ LanguageSelector }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const window = event.currentTarget as Window;

      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChangeIsVisible = () => {
    const body = document.querySelector('body');
    if (!isVisible) {
      body?.classList.add('noscroll');
    } else {
      body?.classList.remove('noscroll');
    }

    setIsVisible((prevState) => !prevState);
  };

  return (
    <header>
      <div
        className={classnames('header-outer', {
          header__fixed: isScrolled,
        })}
      >
        <div className="header-inner">
          <div className="col">
            <button
              type="button"
              className="burger"
              onClick={handleChangeIsVisible}
            >
              <img src={burgerIcon} alt="" />
            </button>
            <a href="#" id="up">
              <img className="logo logo_2" src={logoHover} alt="" />
              <img className="logo logo_1" src={logo} alt="" />
            </a>
          </div>

          <div className="col">
            <div
              className={classnames('menu', {
                active: isVisible,
              })}
            >
              <Navigation>
                <li className="sign-in">
                  <a href="#">
                    <span>Sign In</span>
                    <img src={arrowGradientIcon} alt="" />
                  </a>
                </li>
              </Navigation>
              <img src={mobileNavigationBackground} className="bg" alt="" />
            </div>
          </div>

          <div className="col">
            {LanguageSelector}
            <div className="sign-in">
              <a href="#">
                <span>Sign In</span>
                <img src={arrowIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
