import React from 'react';
import fLogo from './footer-logo.png';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className = 'footer__top'>
                <iframe className='footer__map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5999067139514!2d30.32100801621116!3d59.93878086904905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca640933%3A0x8403eb878242dbd5!2z0JTQvtGF0L7QtNC90YvQuSDQtNC-0Lwg0J0uINCQLiDQnNC10LvRjNGG0LXRgNCw!5e0!3m2!1sru!2sru!4v1617520436699!5m2!1sru!2sru" width="1440" height="400" allowFullScreen="" loading="lazy"></iframe>
                <div className='footer__modal'>
                    <h2 className='footer__modal-title'>Приглашаем <br /> к сотрудничеству дилеров!</h2>
                    <p className = 'footer__modal-address'>ул. Большая<br /> Конюшенная, д. 19/8 <br /><br /><br />
                        Санкт-Петербург
                    </p>
                </div>
            </div>
            <div className='footer__bottom'>
                <img width='130' height='25px' src={fLogo} alt='logo'/>
                <ul className='footer__social'>
                    <li className='footer__list-item'><a className='footer__social-item footer__social-item--vk' href='vk.com'>vk</a></li>
                    <li><a className='footer__social-item footer__social-item--insta' href='instagram.com'>inst</a></li>
                    <li><a className='footer__social-item footer__social-item--fb' href='facebook.com'>fb</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;