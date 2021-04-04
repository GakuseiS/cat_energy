import React from 'react';
import Appeal from '../appeal/appeal';
import Features from '../features/features';
import How from '../how/how';

const MainPage = () => {
    return (
        <div className='mainPage'>
            <Appeal />
            <Features />
            <How />            
            
            <div>
                <h2>Живой пример</h2>
                <div>
                    <div>
                        <p>Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день. </p>
                        <div>
                            <div>
                                <span>5 кг</span>
                                <span>Снижение веса</span>
                            </div>
                            <div>
                                <span>60 дней</span>
                                <span>Затрачено времени</span>
                            </div>
                        </div>
                        <p>Затраты на питание: <span>15000 руб.</span></p>
                    </div>
                </div>
                <div>
                    <span>Было</span>
                    <input type='range' min='0' max='100' step='1' />
                    <span>Стало</span>
                </div>
            </div>
        </div>
    )
}

export default MainPage;