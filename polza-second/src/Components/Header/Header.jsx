import React from 'react';
import Link from './Link/Link';
import image from '../../assets/image/tg.png';
import Title from './Title/Title';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container header__container">
                <Link className='header__link' href='https://t.me/polza_second'>
                    <img src={image} alt="" />
                </Link>
                <Title className='header__title'>
                    PolzaSecond
                </Title>
            </div>
        </header>
    );
};

export default Header;