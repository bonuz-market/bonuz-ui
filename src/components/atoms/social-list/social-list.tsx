import { FC } from 'react';
import './social-list.scss';
import telegramIcon from '/src/assets/images/telegram.svg';
import telegramMessageIcon from '/src/assets/images/message.svg';
import instagramIcon from '/src/assets/images/instagram.svg';
import facebookIcon from '/src/assets/images/facebook.svg';
import twitterIcon from '/src/assets/images/twitter.svg';
import mediumIcon from '/src/assets/images/medium.svg';

export const SocialList: FC = () => (
  <div className="icon-list">
    <a href="#">
      <img src={telegramIcon} alt="" />
    </a>
    <a href="#">
      <img src={twitterIcon} alt="" />
    </a>
    <a href="#">
      <img src={mediumIcon} alt="" />
    </a>
    <a href="#">
      <img src={telegramMessageIcon} alt="" />
    </a>
    <a href="#">
      <img src={instagramIcon} alt="" />
    </a>
    <a href="#">
      <img src={facebookIcon} alt="" />
    </a>
  </div>
);
