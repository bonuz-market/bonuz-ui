import { FC } from 'react';
import { Button, Navigation } from '@/shared/ui/atoms';

export const Footer: FC = () => (
  <footer>
    <div className="outer">
      <div className="inner">
        <div className="row">
          <div className="col">
            <img src="/assets/images/logo.svg" className="logo" />
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
              <p>Subscribe to news:</p>
            </div>
          </div>
          <div className="col">
            <div className="icon_list">
              <a href="#">
                <img src="/assets/images/telegram.svg" />
              </a>
              <a href="#">
                <img src="/assets/images/twiter.svg" />
              </a>
              <a href="#">
                <img src="/assets/images/m.svg" />
              </a>
              <a href="#">
                <img src="/assets/images/message.svg" />
              </a>
              <a href="#">
                <img src="/assets/images/instaram.svg" />
              </a>
              <a href="#">
                <img src="/assets/images/facebook.svg" />
              </a>
            </div>
            <a href="#" className="policy">
              Privacy policy and terms
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
