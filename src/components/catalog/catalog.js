import React from 'react';
import Button from '../button/button';
import item1 from './catalog-1-desktop.png';
import item2 from './catalog-2-desktop.png';
import item3 from './catalog-3-desktop.png';
import item4 from './catalog-4-desktop.png';
import item5 from './catalog-5-desktop.png';
import item6 from './catalog-6-desktop.png';
import item7 from './catalog-7-desktop.png';
import CatalogItem from '../catalogItem/catalogItem';
import './catalog.scss';

const Catalog = () => {
    const items = [
        {id: 1, title: 'Cat energy pro 500 г', img: item1, size: 500, taste: 'Курица', price: 700 },
        {id: 2, title: 'Cat energy pro 1000 г', img: item2, size: 1000, taste: 'Курица', price: 1000 },
        {id: 3, title: 'Cat energy pro 500 г', img: item3, size: 500, taste: 'Рыба', price: 700 },
        {id: 4, title: 'Cat energy pro 1000 г', img: item4, size: 1000, taste: 'Рыба', price: 1000 },
        {id: 5, title: 'Cat energy slim 500 г', img: item5, size: 500, taste: 'Гречка', price: 400 },
        {id: 6, title: 'Cat energy slim 1000 г', img: item6, size: 1000, taste: 'Гречка', price: 700 },
        {id: 7, title: 'Cat energy slim 500 г', img: item7, size: 500, taste: 'Рис', price: 500 }
    ];
    return (
        <div className='catalog'>
            {items.map(item => {
                return <CatalogItem key={item.id} title={item.title} img={item.img} size={item.size} taste={item.taste} price={item.price}/>
            })}
            <div className='catalog__more'>
                <h3 className='catalog__more-title'>Показать еще 100500 товаров</h3>
                <p className='catalog__more-text'>На самом деле вкусов гораздо больше!</p>
                <Button size='small' color='gray'>Показать всё</Button>
            </div>
        </div>
    )
}

export default Catalog;