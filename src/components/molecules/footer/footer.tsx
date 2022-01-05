/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import logo from '../../../assets/images/logo.svg';
import {
  FormArrowButton,
  Button,
  Navigation,
  Input,
  SocialList,
  SocialListProps,
} from '../../atoms';
import './footer.scss';

type NavigationProps = {
  title: string;
  NavigationElements: React.ReactElement[];
};
type FooterProps = {
  navigation: NavigationProps;
  leftSideText: string;
  leftButtons: [
    { text: string; outline?: boolean; link?: string }?,
    { text: string; outline?: boolean; link?: string }?,
  ];
  privacyPolicy?: { text: string; link: string };
  newsletterForm: {
    label: string;
    placeholderText: string;
    onSubmit: () => void;
  };
  socialMediaLinks: SocialListProps;
};
export const Footer: FC<FooterProps> = ({
  navigation,
  leftSideText,
  leftButtons,
  privacyPolicy,
  newsletterForm,
  socialMediaLinks,
}) => (
  <footer>
    <div className="outer">
      <div className="inner">
        <div className="row">
          <div className="col">
            <img src={logo} className="logo" alt="" />
            <p>{leftSideText}</p>
            <div className="button__group">
              {leftButtons.map(
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
