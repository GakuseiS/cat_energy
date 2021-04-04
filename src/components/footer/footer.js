import React from 'react';
import fLogo from './footer-logo.png';

const Footer = () => {
    return (
        <div>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5999067139514!2d30.32100801621116!3d59.93878086904905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca640933%3A0x8403eb878242dbd5!2z0JTQvtGF0L7QtNC90YvQuSDQtNC-0Lwg0J0uINCQLiDQnNC10LvRjNGG0LXRgNCw!5e0!3m2!1sru!2sru!4v1617520436699!5m2!1sru!2sru" width="1440" height="400" allowFullScreen="" loading="lazy"></iframe>
                <div>
                    <h2>Приглашаем к сотрудничеству дилеров!</h2>
                    <p>ул. Большая Конюшенная, д. 19/8 
                        Санкт-Петербург
                    </p>
                </div>
            </div>
            <div>
                <img src={fLogo} alt='logo'/>
                <ul>
                    <li>Vk</li>
                    <li>Instagram</li>
                    <li>facebook</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;