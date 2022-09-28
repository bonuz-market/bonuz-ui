import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../../atoms';
import { Header } from './Header';
import mockData from '../../../mock/mock-data.json';
import { Navigation, NavigationItem } from '../../atoms';
export default {
  title: 'Components/Layout/Header/Primary',
  component: Header,
} as Meta;
const Template: Story = (args) => (
  <div>
    <Header
      {...args}
      LanguageSelector={
        <Dropdown>
          {mockData.dropdown.map((item) => (
            <a href={`/${item.target}`} key={item.target}>
              {item.label}
            </a>
          ))}
        </Dropdown>
      }
      NavigationItems={
        <>
          <NavigationItem key={1}>
            <a href="#how-it-works">About</a>
          </NavigationItem>
          <NavigationItem key={2}>
            <a href="#how-it-works">Services</a>
          </NavigationItem>
          <NavigationItem key={3}>
            <a href="#how-it-works">Use Cases</a>
          </NavigationItem>
          <Navigation isMegaMenu title="Mega Menu">
            <NavigationItem key={1}>
              <a href="#how-it-works">Crypto</a>
            </NavigationItem>
            <Navigation>
              <div style={megaItemStyle}>
                <span>test</span>
                <NavigationItem key={1}>
                  <a href="#how-it-works">Web3</a>
                </NavigationItem>
                <NavigationItem key={2}>
                  <a href="#how-it-works">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.92 11.6C19.9 6.91 16.1 4 12 4C7.90001 4 4.10001 6.91 2.08001 11.6C2.02494 11.7262 1.99652 11.8623 1.99652 12C1.99652 12.1377 2.02494 12.2738 2.08001 12.4C4.10001 17.09 7.90001 20 12 20C16.1 20 19.9 17.09 21.92 12.4C21.9751 12.2738 22.0035 12.1377 22.0035 12C22.0035 11.8623 21.9751 11.7262 21.92 11.6ZM12 18C8.83001 18 5.83001 15.71 4.10001 12C5.83001 8.29 8.83001 6 12 6C15.17 6 18.17 8.29 19.9 12C18.17 15.71 15.17 18 12 18ZM12 8C11.2089 8 10.4355 8.2346 9.77773 8.67412C9.11993 9.11365 8.60724 9.73836 8.30449 10.4693C8.00174 11.2002 7.92252 12.0044 8.07686 12.7804C8.2312 13.5563 8.61217 14.269 9.17158 14.8284C9.73099 15.3878 10.4437 15.7688 11.2196 15.9231C11.9956 16.0775 12.7998 15.9983 13.5307 15.6955C14.2616 15.3928 14.8864 14.8801 15.3259 14.2223C15.7654 13.5645 16 12.7911 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8ZM12 14C11.6044 14 11.2178 13.8827 10.8889 13.6629C10.56 13.4432 10.3036 13.1308 10.1522 12.7654C10.0009 12.3999 9.96126 11.9978 10.0384 11.6098C10.1156 11.2219 10.3061 10.8655 10.5858 10.5858C10.8655 10.3061 11.2219 10.1156 11.6098 10.0384C11.9978 9.96126 12.3999 10.0009 12.7654 10.1522C13.1308 10.3036 13.4432 10.56 13.6629 10.8889C13.8827 11.2178 14 11.6044 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z"
                        fill="url(#paint0_linear_1951_3078)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1951_3078"
                          x1="22.7559"
                          y1="11.886"
                          x2="1.86124"
                          y2="11.4777"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#CE09FF" />
                          <stop offset="1" stop-color="#FFA34E" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Find Us
                  </a>
                </NavigationItem>
              </div>
            </Navigation>
          </Navigation>
          <Navigation isSubmenu title="Sub Menu">
            <NavigationItem key={1}>
              <a href="#how-it-works">Contact Us</a>
            </NavigationItem>
            <NavigationItem key={6}>
              <a href="#how-it-works">Contact Us</a>
            </NavigationItem>
          </Navigation>
        </>
      }
      SignInElement={
        <a className="sign-in" href="#sign-in">
          Sign in
        </a>
      }
      logoUrl={require('../../../assets/images/logo.svg')}
      logoHoverUrl={require('../../../assets/images/logo_2.svg')}
    />
  </div>
);
const megaItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '0.5rem',
};
export const Primary = Template.bind({});
