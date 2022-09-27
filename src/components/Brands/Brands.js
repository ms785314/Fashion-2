import { faBook, faGlasses, faHatCowboy, faShoePrints, faTShirt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './brands.css'
import React from 'react';



const colorMain = '#f34a4a';

const Brands = () => {
    return (
        <div className='brands h-[80px] flex sm:gap-20 xsm:gap-14 gap-10 items-center justify-center w-full' style={{ backgroundColor: `${colorMain}` }}>
            <FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTShirt}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faShoePrints}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGlasses}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
        </div>
    );
};

export default Brands;