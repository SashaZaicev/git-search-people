import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        <div>
            {/*<span>Hello</span>*/}
        </div>
    </header>
}
export default Header;
