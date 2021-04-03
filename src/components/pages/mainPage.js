import React from 'react';
import Button from '../button/button';

const MainPage = () => {
    return (
        <React.Fragment>
            <div>
                <h1>Функциональное питание для котов</h1>
                <p>Занялся собой? Займись котом!</p>
                <Button>Подобрать программу</Button>
            </div>
            <div>
                <div>
                    <h2>Похудение</h2>
                    <p>Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.</p>
                    <a href = '/'>Каталог SLIM</a>
                </div>
            </div>
            <div>
                <div>
                    <h2>Набор массы</h2>
                    <p>Заработать авторитет среди дворовых котов и даже собак?
                        Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!</p>
                    <a href = '/'>Каталог PRO</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage;