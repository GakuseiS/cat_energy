import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import './header.scss';
import logoDesctop from './logo-desktop.png';
import logoTablet from './logo-tablet.png';

const Header = (props) => {
    const links = classNames({
        'header__link': props.location.pathname === '/',
        'header__link--alt': props.location.pathname !== '/'
    });
    const active = classNames({
        'header__item--active': props.location.pathname === '/',
        'header__item--active--alt': props.location.pathname !== '/'
    });
    return (
        <nav className='header'>
            <picture>
                <source srcSet={logoTablet} media='(max-width: 768px)'></source>
                <img src={logoDesctop} alt='logo'/>
            </picture>
            <ul className='header__list'>
                <li className='header__item'><NavLink className={links} to='/' activeClassName={active} exact>Главная</NavLink></li>
                <li className='header__item'><NavLink className={links}  to='/catalog' activeClassName={active}>Каталог продукции</NavLink></li>
                <li className='header__item'><NavLink className={links} to='/form' activeClassName={active}>Подбор программы</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Header);