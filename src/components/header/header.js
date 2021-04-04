import React from 'react';
import './header.scss';
import logoDesctop from './logo-desktop.png';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logoDesctop} alt='logo'/>
            <ul className='header__list'>
                <li className='header__item header__item--active'>Главная</li>
                <li className='header__item'>Каталог продукции</li>
                <li className='header__item'>Подбор программы</li>
            </ul>
        </nav>
    )
}

export default Header;