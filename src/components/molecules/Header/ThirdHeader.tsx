/**
 *      FRAMEWORK
 */
import React, {FC, useState, useEffect} from "react";
import {Link} from "react-router-dom";
/**
 *      STYLES
 */
import './ThirdHeader.scss'
/**
 *      IMAGE
 */
import header_lp_bg from '../../../assets/images/header_lp_bg.svg'
import logo_lp from '../../../assets/images/logo_lp.svg'
import searchIcon from '../../../assets/icons/search.svg'
/**
 *      UTILS
 */
import classNames from "classnames";
/**
 *      COMPONENTS
 */
import {Button, Hamburger, Navigation_lp} from "../../atoms";

export interface LinksItems {
    link: string;
    title: string;
}

type HeaderProps = {
    links?: LinksItems[];
    error?: boolean;
    btnText: string;
};

export const ThirdHeader: FC<HeaderProps> = (
    {
        error = false,
        links,
        btnText
    }) => {
    const [mobMenuIsVisible, setMobMenuIsVisible] = useState<boolean>(false)
    const [animateHeader, setAnimateHeader] = useState<boolean>(false)

    const toggleMenu = () => {
        setMobMenuIsVisible(prev => !prev)
        if (document.body.classList.contains('body_hidden')) {
            document.body.classList.remove('body_hidden')
        } else {
            document.body.classList.add('body_hidden')
        }
    }

    // @ts-ignore
    function listenerHtml(e) {
        const valueScrollHeight = e.target.scrollingElement.scrollTop
        if (valueScrollHeight > 24 && !animateHeader) {
            setAnimateHeader(true)
        } else if (valueScrollHeight < 24) {
            setAnimateHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenerHtml)
        return () => window.removeEventListener('scroll', listenerHtml)
    }, [])

    return (
        <header className={classNames("header", {headerActive: animateHeader})}>
            <div className={classNames("headerWrapper", {headerWrapperActive: animateHeader})}>
                <Hamburger
                    isActive={mobMenuIsVisible}
                    onClick={toggleMenu}
                />
                <div className="logoWrapper">
                    <Link className="logo" to='/'>
                        <img src={logo_lp.toString()} alt=""/>
                    </Link>
                </div>
                {!error &&
                <div className="navWrapper">
                    <Navigation_lp links={links}/>
                </div>
                }
                <div className="wrapper">
                    {!error &&
                    <div className="search">
                        <img src={searchIcon.toString()} alt=""/>
                    </div>
                    }
                    <div className="btnWrapper">
                        <Button secondary>
                            {btnText}
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={classNames("mobMenu", {active: mobMenuIsVisible})}
                style={{alignItems: error ? 'center' : '', justifyContent: error ? 'center' : ''}}
            >
                {!error && <Navigation_lp links={links}/>}
                <Button>{btnText}</Button>
                <div className="mobMenuBg">
                    <img src={header_lp_bg.toString()} alt="Plates"/>
                </div>
            </div>
        </header>
    );
};
