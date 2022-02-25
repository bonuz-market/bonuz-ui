import { FC } from 'react';
import './HeaderSecondary.scss';

export type HeaderSecondaryProps = {
  logo?: string;
  navText?: string;
  title: string;
  description?: string;
};
export const HeaderSecondary: FC<HeaderSecondaryProps> = ({
  logo,
  navText,
  title,
  description,
}) => (
  <header className="header">
    <div className="container">
      <div className="header__navbar">
        {navText && (
          <a href="/" className="header__back">
            {navText}
          </a>
        )}
        {logo && (
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        )}
      </div>
      <div className="header__info">
        <h1 className="header__info-title">{title}</h1>
        {description && (
          <p className="header__info-description">{description}</p>
        )}
      </div>
    </div>
  </header>
);
