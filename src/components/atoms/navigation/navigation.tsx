import { FC } from 'react';
import './navigation.scss';

export const Navigation: FC = ({ children }) => (
  <ul className="nav">
    <li className="nav-item">
      <a href="#how-it-works">How it works</a>
    </li>
    <li className="nav-item">
      <a href="#subscribe">Join the Waitlist</a>
    </li>
    <li className="nav-item">
      <a href="#supply">Token</a>
    </li>
    <li className="nav-item">
      <a href="#roadmap">Roadmap</a>
    </li>
    <li className="nav-item">
      <a href="#army">Team</a>
    </li>
    <li className="nav-item">
      <a href="#subscribe">Private Sale</a>
    </li>
    {children}
  </ul>
);
