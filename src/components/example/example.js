import React from 'react';
import './example.scss';
import catWas from './Was.png';

const Example = () => {
    return (
        <div className='example'>
            <h2 className='example__title'>Живой пример</h2>
            <div className='example__content'>
                <div className='example__left'>
                    <p className='example__text'>Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день. </p>
                        <div className='example__wrapper'>
                            <fieldset className='example__fancy'>
                                <legend className='example__legend' align='center'>Снижение веса</legend>
                                <span className='example__numbers'>5 кг</span>
                            </fieldset>
                            <fieldset className='example__fancy'>
                                <legend className='example__legend' align='center'> Затрачено времени </legend>
                                <span className='example__numbers'>60 дней</span>
                            </fieldset>
                            <p className='example__cost example__cost--table'>Затраты на питание: <span className='example__cost-exact'>15000 руб.</span></p>
                        </div>
                    <p className='example__cost'>Затраты на питание: <span className='example__cost-exact'>15000 руб.</span></p>
                </div>
            
                <div className='example__right'>
                    <img className='example__cat' src={catWas} width='677' height='499' alt='was' />
                    <span className='example__label'>Было</span>
                    <input className='example__slider' type='range' min='0' max='100' step='1' />
                    <span className='example__label'>Стало</span>
                </div>
            </div>
        </div>
    )
}

export default Example;