import React, { FC } from "react";
import "./CardRaise.scss";
import { SocialListBlue } from "../LpSocialListBlue";
import { SocialListBlueProps } from "../LpSocialListBlue/SocialListBlue";
import { Raise, TRaise } from "../../../atoms/LPComponents/Raise/Raise";
import { Button } from "../../../atoms";

export interface ICardRaise {
  image: object|string
  titleName: string
  subTitleName: string
  buttonTitle?: string
  links:SocialListBlueProps
  raise:TRaise
}

export const CardRaise: FC<ICardRaise> = (
  {
    image,
    titleName,
    subTitleName,
    buttonTitle,
    links,
    raise
  }
) => {

  return (
    <div className="card">
      <div className="cardImg" style={{
        background: `url(${image}) center/cover no-repeat`
      }}> </div>
      <div className="cardMain">
        <div className="cardBg1">
          <Button>
            {buttonTitle}
          </Button>
          <div className="cardBg1Title">
            <div className="cardBg1TitleName">
              {titleName}
            </div>
            <div className="cardBg1TitleType">
              {subTitleName}
            </div>
          </div>
        </div>

        <div className="cardBg2">
          <div className="cardBg2Before">
          <SocialListBlue twitter={links.twitter}
                          medium={links.medium}
                          instagram={links.instagram}
                          telegram={links.telegram}
          />
          </div>

          <div className="cardBg2ProgressLine">
            <div className="cardBg2ProgressLineActive">

            </div>
          </div>
          <Raise total={raise.total}
                 totalRaise={raise.totalRaise}
                 personalAlocationRaise={raise.personalAlocationRaise}
                 personalAlocation={raise.personalAlocation} />
        </div>
      </div>
    </div>
  );
};
