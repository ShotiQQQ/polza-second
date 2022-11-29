import React from 'react';
import Title from '../../Header/Title/Title';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './map.scss'

const MapContent = () => {
    const defaultState = {
        center: [43.118787, 131.891926],
        zoom: 17,
    };

    return (
        <section className='map'>
            <div className="container map__container">
                <Title className='map__title'>
                    Мы тут, нажми на карту
                </Title>
                <YMaps>
                    <Map defaultState={defaultState} className='map__chart'>
                        <Placemark geometry={[43.118787, 131.891926]} />
                    </Map>
                </YMaps>
            </div>
        </section>
    );
};

export default MapContent;