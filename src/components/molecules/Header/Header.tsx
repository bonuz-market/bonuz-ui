import { FC, ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';

import { Navigation } from '../../atoms';
import './Header.scss';
import mobileNavigationBackground from '../../../assets/images/menu_bg.svg';

type LanguageSelectorProps = {
  options: { label: string; target: string }[];
};
type HeaderProps = {
  LanguageSelector?: ReactElement<LanguageSelectorProps>;
  NavigationElements: ReactElement[];
  SignInElement?: ReactElement;
  logoUrl: string;
  logoHoverUrl?: string;
};
export const Header: FC<React.PropsWithChildren<HeaderProps>> = ({
  LanguageSelector,
  NavigationElements,
  SignInElement,
  logoUrl,
  logoHoverUrl,
}) => {
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
    <header className="sticky">
      <div
        className={classnames('header-outer', {
          header__fixed: isScrolled,
        })}
      >
        <div className="header-inner">
          <div className="col">
            <button
              type="button"
              className={classnames('burger', {
                open: isVisible,
              })}
              onClick={handleChangeIsVisible}
            >
              <div className="burger-lines" />
            </button>
            <a href="/">
              {logoHoverUrl && (
                <img
                  className="logo logo_2"
                  src={logoHoverUrl}
                  alt="Bonuz logo"
                />
              )}
              <img
                className={classnames('logo', {
                  logo_1: logoHoverUrl,
                })}
                src={logoUrl}
                alt="Bonuz Logo"
              />
            </a>
          </div>

          <div className="col">
            <div
              className={classnames('menu', {
                active: isVisible,
              })}
            >
              <Navigation onItemClick={handleChangeIsVisible}>
                {NavigationElements}
                {SignInElement}
              </Navigation>
              <img src={mobileNavigationBackground} className="bg" alt="" />
            </div>
          </div>

          <div className="col">
            {LanguageSelector}
            {SignInElement && <div className="sign-in">{SignInElement}</div>}
          </div>
        </div>
      </div>
    </header>
  );
};
