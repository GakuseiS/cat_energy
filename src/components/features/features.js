import React from 'react';
import './features.scss';

const Features = () => {
    return (
        <div className='features'>
            <div className='features__item'>
                <h2 className='features__title'><span className='features__title-icon features__title-icon--slim'></span>Похудение</h2>
                <p className='features__text'>Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.</p>
                <a className='features__link' href = '/'>Каталог SLIM <span className='features__link-icon'></span></a>
            </div>
            <div className='features__item'>
                <h2 className='features__title'><span className='features__title-icon features__title-icon--pro'></span>Набор массы</h2>
                <p className='features__text'>Заработать авторитет среди дворовых котов и даже собак?
                    Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!</p>
                <a className='features__link' href = '/'>Каталог PRO <span className='features__link-icon'></span></a>
            </div>
        </div>
    )
}

export default Features;