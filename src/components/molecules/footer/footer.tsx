import { FC } from 'react';

import {
  SubscribeToNews,
  Button,
  Navigation,
  Input,
  SocialList,
} from '../../atoms';

export const Footer: FC = () => (
  <footer>
    <div className="outer">
      <div className="inner">
        <div className="row">
          <div className="col">
            <img src="/assets/images/logo.svg" className="logo" alt="" />
            <p>
              A space for creators to BONUZ your fans with exclusive content
            </p>
            <div className="button-group">
              <Button>Join Community</Button>
              <Button outline>Whitepaper</Button>
            </div>
          </div>
          <div className="col">
            <p>Navigation:</p>
            <ul>
              <Navigation />
            </ul>

            <div className="form">
              <Input
                label="Subscribe to news:"
                placeholder="Enter you email"
                actionButton={<SubscribeToNews />}
              />
            </div>
          </div>
          <div className="col">
            <SocialList />
            <a href="#" className="policy">
              Privacy policy and terms
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
