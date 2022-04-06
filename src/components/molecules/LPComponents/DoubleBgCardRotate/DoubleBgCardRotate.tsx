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
        <div className={`DoubleBgCardRotate ${right?'right':''} ${left?'left':''}`}
            >
            <div className='DoubleBgCardRotateBg1'
                 style={{
                     background: `url(${image}) center/cover no-repeat`
                 }}
            > </div>
            <div className='DoubleBgCardRotateBg2'> </div>

            <div className='DoubleBgCardRotateFlag'>
                <div className='DoubleBgCardRotateFlagTitle'>
                    {title}
                </div>
                <div className='DoubleBgCardRotateFlagSubTitle'>
                    {subtitle}
                </div>
            </div>

        </div>
    );
};