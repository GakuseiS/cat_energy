import React from 'react';
import Button from '../button/button';
import './catalogPage.scss';
import Catalog from '../catalog/catalog';

const CatalogPage = () => {
    
    return (
        <div className='catalogPage'>
            <h1 className='catalogPage__title'>Каталог продукции</h1>
            <Catalog />
            <div>
                <h2>Дополнительные товары</h2>
                <div>
                    <ul>
                        <li>
                            <span>Сахарозаменитель</span> <span>1 упаковка (100 г)</span> <span>200 Р.</span> <Button>Заказать</Button>
                        </li>
                        <li>
                            <span>Питьевая вода</span> <span>5 литров</span> <span>50 Р.</span> <Button>Заказать</Button>
                        </li>
                        <li>
                            <span>Молоко</span> <span>1 литр</span> <span>100 Р.</span> <Button>Заказать</Button>
                        </li>
                        <li>
                            <span>Витамины</span> <span>1 упаковка (30 г)</span> <span>300 Р.</span> <Button>Заказать</Button>
                        </li>
                    </ul>
                    <div>
                        <p>Закажите все и получите чехол для кота в подарок!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage;