import React from 'react';
import logoDesctop from './logo-desktop.png';

const Header = () => {
    return (
        <nav>
            <img src={logoDesctop} alt='logo'/>
            <ul>
                <li>Главная</li>
                <li>Каталог продукции</li>
                <li>Подбор программы</li>
            </ul>
        </nav>
    )
}

export default Header;