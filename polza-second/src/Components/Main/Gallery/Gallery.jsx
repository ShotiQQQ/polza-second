import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { generateId } from '../../../utils/generateKey';
import Modal from '../../Modal/Modal';
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
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(null);

    function clickOpen(e) {
        setIsOpen(true);
        setCurrentSlide(e.target.src);
    }

    function clickClose(e) {
        e.stopPropagation();
        if (e.target.id === 'modal') {
            setIsOpen(false);
            setCurrentSlide(null);
        }
    }

    return (
        <section className='gallery'>
            {isOpen && <Modal className='modal gallery__modal' onClick={clickClose}>
                <img src={currentSlide} alt="" />
            </Modal>}
            <div className="container gallery__container">
                <Swiper wrapperTag='ul' slidesPerView={5} spaceBetween={25}>
                    {listOfImages.map(({ id, path, name}) => (
                        <SwiperSlide tag='li' key={id}>
                            <img onClick={clickOpen} className='gallery__img' alt={name} src={path}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;