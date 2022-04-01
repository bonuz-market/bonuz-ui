/**
 *      FRAMEWORK
 */
import React, { FC } from 'react';
/**
 *      STYLE
 */
import s from './styles.module.scss'
/**
 *      INTERFACE
 */
import {LinksItems} from '../../../molecules/Header/ThirdHeader'

type Iprops = {
    links?: LinksItems[]
}

export const Navigation_lp: FC<Iprops> = ({links = [] }) => {
    return (
        <nav className={s.nav}>
            <ul>
                {links.map(i => (
                    <li className={s.link}>
                        <a
                            key={i?.link}
                            href={i?.link}
                        >
                            {i?.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

