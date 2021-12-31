import { FC } from 'react';
import './social-list.scss';
import telegramIcon from '../../../assets/images/telegram.svg';
import telegramMessageIcon from '../../../assets/images/message.svg';
import instagramIcon from '../../../assets/images/instagram.svg';
import facebookIcon from '../../../assets/images/facebook.svg';
import twitterIcon from '../../../assets/images/twitter.svg';
import mediumIcon from '../../../assets/images/medium.svg';

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
