import React, { FC } from "react";
 import  "./DoubleBgCard.scss";
import { Button } from "../../../atoms";

export interface IDoubleBgCard{
  image:object|string
  title:string
  subtitle:string
  buttonTitle:string
}

export const DoubleBgCard: FC<IDoubleBgCard> = ({ image, title, subtitle,buttonTitle }) => {
  return (
    <div className='card DoubleBgCard'>
      <div
        className='cardBg1'
        style={{
          background: `url(${image}) center/cover no-repeat`,
        }}
      >
        <Button>{buttonTitle}</Button>
      </div>
      <div className='cardBg2'> </div>

      <div className='cardFlag'>
        <div className='cardFlagTitle'>{title}</div>
        <div className='cardFlagSubTitle'>{subtitle}</div>
      </div>
    </div>
  );
};
