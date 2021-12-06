import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import { Navigation } from '../../atoms';
import './header.scss';

const Signup: FC = () => (
  <div className="sign-up">
    <a href="#">
      <span>Sign Up</span>
    </a>
  </div>
);
export const Header: FC = () => {
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
              <img src="/assets/images/menu.svg" alt="" />
            </button>
            <a href="#" id="up">
              <img
                className="logo logo_2"
                src="/assets/images/logo_2.svg"
                alt=""
              />
              <img
                className="logo logo_1"
                src="/assets/images/logo.svg"
                alt=""
              />
            </a>
          </div>

          <div className="col">
            <div
              className={classnames('menu', {
                active: isVisible,
              })}
            >
              <ul id="menu-menu">
                <Navigation />
                <li className="sign-in">
                  <a href="#">
                    <span>Sign In</span>
                    <img src="/assets/images/arrow.svg" alt="" />
                  </a>
                </li>
              </ul>
              <img src="/assets/images/menu_bg.svg" className="bg" alt="" />
            </div>
          </div>

          <div className="col">
            <div className="sign-in">
              <a href="#">
                <span>Sign In</span>
                <img src="/assets/images/f_i.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
