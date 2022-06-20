import { FC } from 'react';
import { SocialList, SocialListProps } from '../../atoms';
import './FooterSecondary.scss';

export type FooterSecondaryProps = {
  logo?: string;
  description?: string;
  socialMediaLinks?: SocialListProps;
};
export const FooterSecondary: FC<React.PropsWithChildren<FooterSecondaryProps>> = ({
  logo,
  description,
  socialMediaLinks,
}) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        {logo && (
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
        )}
        {description && <p className="footer__text">{description}</p>}
        {socialMediaLinks && <SocialList {...socialMediaLinks} />}
      </div>
    </div>
  </footer>
);
