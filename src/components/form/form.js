import React from 'react';
import Button from '../button/button';
import './form.scss';

const Form = () => {
    return (
        <form className='form'>
            <h3 className='form__title'>Заполните анкету и мы подберем программу питания для вашего кота</h3>
            <div className='form__wrapper'>
                <div className='form__wrapper-name'>
                    <label className='form__label' htmlFor='name'>Имя:*</label>
                    <input className='form__input-text form__input-text--name' id='name' type='text' placeholder='БАРСИК'/>
                    <label className='form__label' htmlFor='weight'>Вес (кг):*</label>
                    <input className='form__input-text form__input-text--weight' id='weight' type='number' min='0' placeholder='7'/>
                    <label className='form__label' htmlFor='age'>Возраст (лет):</label>
                    <input className='form__input-text form__input-text--age' id='age' type='number' min='0' placeholder='7'/>
                </div>
                <div className='form__wrapper-type'> 
                    <input className='form__input-radio' name='type' id='slim' type='radio' defaultChecked/>
                    
                    <label className='form__label' htmlFor='slim'><span className='form__custom-radio'></span> Похудение</label><br />
                    <input className='form__input-radio' name='type' id='gain' type='radio'/>
                    <label className='form__label' htmlFor='gain'><span className='form__custom-radio'></span> Набор массы</label><br />
                    <input className='form__input-radio' name='type' id='advice' type='radio'/>
                    <label className='form__label' htmlFor='advice'><span className='form__custom-radio'></span>Не знаю (нужен ваш совет)</label>
                </div>
            </div>
            <div className='form__contacts'>
                <h2 className='form__fancy-title'>Контактные данные (владельца кота)</h2>
                <div className='form__wrapper-contacts'>
                    <label className='form__label' htmlFor='mail'>E-mail:*</label>
                    <input className='form__input-text form__input-text-mail' id='mail' type='email' placeholder='example@gmail.com'/>
                    <label className='form__label' htmlFor='tel'>Телефон:*</label>
                    <input className='form__input-text form__input-text-tel' id='tel' type='tel' placeholder='8 (800) 900-60-90'/>
                </div>
            </div>
            <div className='form__comments'>
                <h2 className='form__fancy-title'>Комментарий</h2>
                <textarea className='form__textarea' placeholder='РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА'/>
            </div>
            <div className='form__sup'>
                <h2 className='form__fancy-title'>Дополнительно</h2>
                <input className='form__input-check' name='sugar' id='sugar' type='checkbox' defaultChecked/>
                <label className='form__label' htmlFor='sugar'><span className='form__custom-check'></span>Сахарозаменитель</label>
                <input className='form__input-check' name='water' id='water' type='checkbox'/>
                <label className='form__label' htmlFor='water'><span className='form__custom-check'></span>Питьевая вода</label>
                <input className='form__input-check' name='milk' id='milk' type='checkbox'/>
                <label className='form__label' htmlFor='milk'><span className='form__custom-check'></span>Молоко</label>
                <input className='form__input-check' name='vitamin' id='vitamin' type='checkbox'/>
                <label className='form__label' htmlFor='vitamin'><span className='form__custom-check'></span>Витамины</label>
            </div>
            <Button size='large'>Отправить заявку</Button>
            <p className='form__text'>* - Обязательные поля</p>
        </form>
    )
}

export default Form;