import React from 'react';
import Title from '../../Header/Title/Title';
import './map.scss'

const Map = () => {
    return (
        <section className='map'>
            <div className="container map__container">
                <Title className='map__title'>
                    Мы тут, нажми на карту
                </Title>
            </div>
        </section>
    );
};

export default Map;