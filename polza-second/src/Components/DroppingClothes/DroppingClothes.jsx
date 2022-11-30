import React, { useEffect } from 'react';
import './droppingClothes.scss';
import gsap from 'gsap';
import { randomDuration } from '../../utils/randomDuration';
import { randomDelay } from '../../utils/randomDelay';
import { heightOfBody } from '../../utils/heightOfBody';

const listOfDropImage = [
    {id: 1, path: './images/clothes_1.png', name: ''},
    {id: 2, path: './images/clothes_2.png', name: ''},
    {id: 3, path: './images/clothes_3.png', name: ''},
    {id: 4, path: './images/clothes_4.png', name: ''},
    {id: 5, path: './images/clothes_5.png', name: ''},
]



const DroppingClothes = () => {
    useEffect(() => {
        for (let image in listOfDropImage) {
            gsap.to(`.img${+image + 1}`,{
                y: heightOfBody,
                duration: randomDuration,
                repeat: -1,
                delay: randomDelay});
        }
    }, [])
    
    return (
        <div className='dropping-clothes'>
            {listOfDropImage.map(img => {
                return <img className={`img${img.id}`} src={img.path} alt={img.name} key={img.id}/>
            })}
        </div>
    );
};

export default DroppingClothes;