import React, {FC} from 'react';
import './SocialListBlue.scss';
import { IconBlueContainer } from '../../../atoms/LPComponents/LpIconBlueContainer';
import Telegram from '../../../../assets/icons/Telegram';
import Twitter from '../../../../assets/icons/Twitter';
import Medium from '../../../../assets/icons/Medium';
import Instagram from "../../../../assets/icons/Instagram";

export type SocialListBlueProps = {
    telegram?: string;
    twitter?: string;
    instagram?: string;
    medium?: string;
};


export const SocialListBlue:FC<SocialListBlueProps> = ({
                                                instagram,
                                                medium,
                                                telegram,
                                                twitter,
                                            }) => {
    return (
        <nav>
            <ul className='cardBg2Links'>
                {telegram && (
                  <li>
                      <IconBlueContainer href={telegram} >
                          <Telegram/>
                      </IconBlueContainer>
                  </li>
                )}
                {twitter && (
                  <li>
                      <IconBlueContainer href={twitter}>
                          <Twitter/>
                      </IconBlueContainer>
                  </li>
                )}
                {medium && (
                  <li>
                      <IconBlueContainer href={medium}>
                          <Medium/>
                      </IconBlueContainer>
                  </li>
                )}
                {instagram && (
                  <li>
                      <IconBlueContainer href={instagram}>
                          <Instagram/>
                      </IconBlueContainer>
                  </li>
                )}

            </ul>
        </nav>
    );
};