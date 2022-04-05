import React, {FC} from 'react';
import './DoubleBgCardRotate.scss'
import { IDoubleBgCard } from "../DoubleBgCard/DoubleBgCard";

export interface IDoubleBgCardRotate extends IDoubleBgCard{
  right?:boolean
  left?:boolean
}

export const DoubleBgCardRotate: FC<IDoubleBgCardRotate> = (
    {
        image,
        title,
        subtitle,
        right = false,
        left = false,
    }
) => {

    return (
        <div className={`DoubleBgCardRotate card ${right?'right':''} ${left?'left':''}`}
            >
            <div className='cardBg1'
                 style={{
                     background: `url(${image}) center/cover no-repeat`
                 }}
            > </div>
            <div className='cardBg2'> </div>

            <div className='cardFlag'>
                <div className='cardFlagTitle'>
                    {title}
                </div>
                <div className='cardFlagSubTitle'>
                    {subtitle}
                </div>
            </div>

        </div>
    );
};