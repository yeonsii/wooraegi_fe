import React, { useState } from "react";

const headerNav = [
    {
        title: "main",
        url: "#intro",
    },
    {
        title: "diary",
        url: "#diary",
    },
    {
        title: "log",
        url: "#log",
    },
    {
        title: "profile",
        url: "#profile",
    },
];

const Header = () => {

    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">wooraegi</a>
                    <br />
                    우리애기모음.<em>zip</em>
                </div>
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                     <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"}
                    role="button" 
                    tabindex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;