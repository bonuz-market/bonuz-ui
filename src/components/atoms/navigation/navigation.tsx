import { FC } from 'react';
import './navigation.scss';

export const Navigation: FC = ({ children }) => (
  <ul className="nav">
    <li className="nav-item">
      <a href="#four">How it works</a>
    </li>
    <li className="nav-item">
      <a href="#subscribe">Join the Waitlist</a>
    </li>
    <li className="nav-item">
      <a href="#eight">Token</a>
    </li>
    <li className="nav-item">
      <a href="#six">Roadmap</a>
    </li>
    <li className="nav-item">
      <a href="#nine">Team</a>
    </li>
    <li className="nav-item">
      <a href="#subscribe">Private Sale</a>
    </li>
    {children}
  </ul>
);
