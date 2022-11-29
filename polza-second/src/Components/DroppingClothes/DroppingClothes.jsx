import React, { useEffect } from 'react';
import './droppingClothes.scss';
import gsap from 'gsap';

const listOfDropImage = [
    {path: './images/clothes_1.png', name: ''},
    {path: './images/clothes_2.png', name: ''},
    {path: './images/clothes_3.png', name: ''},
    {path: './images/clothes_4.png', name: ''},
    {path: './images/clothes_5.png', name: ''},
]



const DroppingClothes = () => {
    useEffect(() => {
        gsap.to(".img1" , {
            y: () => document.body.offsetHeight,
            duration: 12,
            delay: 1,
        });
        gsap.to(".img2" , {
            y: () => document.body.offsetHeight,
            duration: 10,
            delay: 1,
        });
        gsap.to(".img3" , {
            y: () => document.body.offsetHeight,
            duration: 7,
            delay: 1,
        });
        gsap.to(".img4" , {
            y: () => document.body.offsetHeight,
            duration: 14,
            delay: 1,
        });
        gsap.to(".img5" , {
            y: () => document.body.offsetHeight,
            duration: 12,
            delay: 1,
        });
    }, [])

    return (
        <div className='dropping-clothes'>
            <div className="dropping-clothes__left">
                <img className='img1' src={listOfDropImage[0].path} alt="" />
                <img className='img2' src={listOfDropImage[1].path} alt="" />
                <img className='img3' src={listOfDropImage[2].path} alt="" />
            </div>
            <div className="dropping-clothes__right">
                <img className='img4' src={listOfDropImage[3].path} alt="" />
                <img className='img5' src={listOfDropImage[4].path} alt="" />
            </div>
        </div>
    );
};

export default DroppingClothes;