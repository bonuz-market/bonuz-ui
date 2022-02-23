/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import {
  FormArrowButton,
  Button,
  Navigation,
  Input,
  SocialList,
  SocialListProps,
} from '../../atoms';
import './Footer.scss';

type NavigationProps = {
  title: string;
  NavigationElements: React.ReactElement[];
};
type FooterProps = {
  logo: React.ReactElement;
  navigation: NavigationProps;
  sideText: string;
  buttons?: { text: string; outline?: boolean; link?: string }[];
  privacyPolicy?: { text: string; link: string };
  newsletterForm: {
    label: string;
    placeholderText: string;
    onSubmit: () => void;
  };
  socialMediaLinks: SocialListProps;
};
const Footer: FC<FooterProps> = ({
  logo,
  navigation,
  sideText,
  buttons,
  privacyPolicy,
  newsletterForm,
  socialMediaLinks,
}) => (
  <footer>
    <div className="outer">
      <div className="inner">
        <div className="row">
          <div className="col">
            {logo}
            <p>{sideText}</p>
            <div className="button__group">
              {buttons &&
                buttons.map(
                  (item) =>
                    item && (
                      <Button
                        key={item.text}
                        outline={item.outline}
                        link={item.link}
                      >
                        {item.text}
                      </Button>
                    ),
                )}
            </div>
          </div>
          <div className="col">
            <p>{navigation.title}</p>
            <Navigation>{navigation.NavigationElements}</Navigation>
            <div className="form">
              <Input
                label={newsletterForm.label}
                placeholder={newsletterForm.placeholderText}
                actionButton={
                  <FormArrowButton onClick={newsletterForm.onSubmit} />
                }
              />
            </div>
          </div>
          <div className="col">
            <SocialList {...socialMediaLinks} />
            {privacyPolicy && (
              <a href={privacyPolicy.link} className="policy">
                {privacyPolicy.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

/**
 *      EXPORTS
 */
export type { NavigationProps, FooterProps };
export { Footer };
