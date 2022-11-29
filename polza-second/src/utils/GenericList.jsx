import React from 'react';
import { SwiperSlide } from 'swiper/react';

export function GenericList({listItems}) {
    return (
        <>
            {listItems.map(({ className, id, path}) => (
                <SwiperSlide tag='li' key={id}>
                    <img className={className} alt={`img${id}`} src={path}/>
                </SwiperSlide>
            ))}
        </>
    )
}