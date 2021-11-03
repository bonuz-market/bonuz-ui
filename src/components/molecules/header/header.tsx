import { FC, useState } from 'react';
import classNames from 'classnames';

import { Navigation } from '../../atoms';

export const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeIsVisible = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <header>
      <div className="header-outer">
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
              className={classNames('menu', {
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
            <div className="sign-up">
              <a href="#">
                <span>Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};