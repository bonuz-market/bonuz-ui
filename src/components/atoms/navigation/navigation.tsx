import { FC } from 'react';
import './navigation.scss';

export const Navigation: FC = () => (
  <ul className="menu">
    <li className="menu-item">
      <a href="#four">How it works</a>
    </li>
    <li className="menu-item">
      <a href="#subscribe">Join the Waitlist</a>
    </li>
    <li className="menu-item">
      <a href="#eight">Token</a>
    </li>
    <li className="menu-item">
      <a href="#six">Roadmap</a>
    </li>
    <li className="menu-item">
      <a href="#nine">Team</a>
    </li>
    <li className="menu-item">
      <a href="#subscribe">Private Sale</a>
    </li>
  </ul>
);
