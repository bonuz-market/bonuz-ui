import { FC } from 'react';
import './social-list.scss';

export const SocialList: FC = () => (
  <div className="icon-list">
    <a href="#">
      <img src="/assets/images/telegram.svg" alt="" />
    </a>
    <a href="#">
      <img src="/assets/images/twiter.svg" alt="" />
    </a>
    <a href="#">
      <img src="/assets/images/m.svg" alt="" />
    </a>
    <a href="#">
      <img src="/assets/images/message.svg" alt="" />
    </a>
    <a href="#">
      <img src="/assets/images/instaram.svg" alt="" />
    </a>
    <a href="#">
      <img src="/assets/images/facebook.svg" alt="" />
    </a>
  </div>
);
