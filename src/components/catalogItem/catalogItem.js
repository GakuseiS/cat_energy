import React from 'react';
import Button from '../button/button';

const CatalogItem = ({title, img, size, taste, price}) => {
    return (
        <div>
            <img src={img} alt='pack' />
            <h3>{title}</h3>
            <ul>
                <li>Объем {size} г</li>
                <li>Вкус {taste}</li>
                <li>Цена {price} Р.</li>
            </ul>
            <Button size='small'>Заказать</Button>
        </div>
    )
}



export default CatalogItem;