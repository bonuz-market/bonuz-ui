import React, { FC } from "react";
 import  "./DoubleBgCard.scss";
import { Button } from "../../../atoms";

export interface IDoubleBgCard{
  image:object|string
  title:string
  subtitle:string
  buttonTitle:string
  onClick?:()=>void
}

export const DoubleBgCard: FC<IDoubleBgCard> = ({onClick, image, title, subtitle,buttonTitle }) => {
  return (
    <div className='DoubleBgCard'>
      <div
        className='DoubleBgCardBg1'
        style={{
          background: `url(${image}) center/cover no-repeat`,
        }}
        onClick={onClick}
      >
        <Button>{buttonTitle}</Button>
      </div>
      <div className='DoubleBgCardBg2'> </div>

      <div className='DoubleBgCardFlag'>
        <div className='DoubleBgCardFlagTitle'>{title}</div>
        <div className='DoubleBgCardFlagSubTitle'>{subtitle}</div>
      </div>
    </div>
  );
};
