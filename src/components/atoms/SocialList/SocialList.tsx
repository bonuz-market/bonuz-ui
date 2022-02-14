import { FC } from 'react';
import './SocialList.scss';
import telegramIcon from '../../../assets/images/telegram.svg';
import telegramMessageIcon from '../../../assets/images/message.svg';
import instagramIcon from '../../../assets/images/instagram.svg';
import facebookIcon from '../../../assets/images/facebook.svg';
import twitterIcon from '../../../assets/images/twitter.svg';
import mediumIcon from '../../../assets/images/medium.svg';

export type SocialListProps = {
  telegram?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  medium?: string;
  telegramMessage?: string;
};
export const SocialList: FC<SocialListProps> = ({
  facebook,
  instagram,
  medium,
  telegram,
  telegramMessage,
  twitter,
}) => (
  <div className="icon-list">
    {telegram && (
      <a href={telegram}>
        <img src={telegramIcon} alt="" />
      </a>
    )}
    {twitter && (
      <a href={twitter}>
        <img src={twitterIcon} alt="" />
      </a>
    )}
    {medium && (
      <a href={medium}>
        <img src={mediumIcon} alt="" />
      </a>
    )}
    {telegramMessage && (
      <a href={telegramMessage}>
        <img src={telegramMessageIcon} alt="" />
      </a>
    )}
    {instagram && (
      <a href={instagram}>
        <img src={instagramIcon} alt="" />
      </a>
    )}
    {facebook && (
      <a href={facebook}>
        <img src={facebookIcon} alt="" />
      </a>
    )}
  </div>
);
