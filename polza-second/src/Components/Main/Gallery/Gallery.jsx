import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { generateId } from '../../../utils/generateKey';
import './gallery.scss';

const listOfImages = [
    {path: './images/1.jpg', name: ''},
    {path: './images/2.jpg', name: ''},
    {path: './images/3.jpg', name: ''},
    {path: './images/4.jpg', name: ''},
    {path: './images/5.jpg', name: ''},
    {path: './images/1.jpg', name: ''},
    {path: './images/2.jpg', name: ''},
    {path: './images/3.jpg', name: ''},
    {path: './images/4.jpg', name: ''},
    {path: './images/5.jpg', name: ''},
].map(generateId);

const Gallery = () => {
    return (
        <section className='gallery'>
            <div className="container gallery__container">
                <Swiper wrapperTag='ul' slidesPerView={5} spaceBetween={25}>
                    {listOfImages.map(({ id, path, name}) => (
                        <SwiperSlide tag='li' key={id}>
                            <img className='gallery__img' alt={name} src={path}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;