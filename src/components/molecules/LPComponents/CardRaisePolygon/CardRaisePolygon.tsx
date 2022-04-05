import React, {FC} from 'react';
import  './CardRaisePolygon.scss';
import { ICardRaise } from "../CardRaise/CardRaise";
import { PhotoContainer } from '../../../atoms/LPComponents/LpPhotoContainerPolygon';
import { SocialListBlue } from "../LpSocialListBlue";
import { Raise } from "../../../atoms/LPComponents/Raise";

export interface ICardRaisePolygon extends ICardRaise {
  id:any
}

export const CardRaisePolygon: FC<ICardRaisePolygon> = (
    {
      image,
      titleName,
      subTitleName,
      links,
      raise,
      id
    }
) => {
    return (
        <div className='card cardPolygon'>
            <div className='cardImg'>
                <PhotoContainer id={id}  image={image}/>
            </div>
            <div className='cardMain'>
                <div className='cardBg1Title'>
                    <div className='cardBg1TitleName'>
                      {titleName}
                    </div>
                    <div className='cardBg1TitleType'>
                      {subTitleName}
                    </div>
                </div>
              <SocialListBlue twitter={links.twitter}
                              medium={links.medium}
                              instagram={links.instagram}
                              telegram={links.telegram}
              />
              <Raise total={raise.total}
                     totalRaise={raise.totalRaise}
                     personalAlocationRaise={raise.personalAlocationRaise}
                     personalAlocation={raise.personalAlocation} />
            </div>
        </div>
    );
};