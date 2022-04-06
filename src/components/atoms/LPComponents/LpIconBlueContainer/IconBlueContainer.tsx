/**
 *      FRAMEWORK
 */
import React, {FC} from "react";
/**
 *      STYLES
 */
import "./IconBlueContainer.scss";

export interface IconBlueContainerProps {
    href: string;
}

export const IconBlueContainer: FC<IconBlueContainerProps> = ({
                                                           children,
                                                           href ,
                                                       }) => (
    <a href={href} className='container'>
        <svg
            className='containerBg'
            width="44"
            height="50"
            viewBox="0 0 44 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 0L11.0765 6.38045L-1.17689e-07 12.5L0.153068 25L-1.17689e-07 37.5L11.0765 43.6195L22 50L32.9235 43.6195L44 37.5L43.8469 25L44 12.5L32.9235 6.38045L22 0Z"
                fill="#23158E"
            />
        </svg>
        <div className='containerChild'>{children}</div>
    </a>
);
