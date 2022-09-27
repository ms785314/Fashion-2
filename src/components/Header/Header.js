import { faCartShopping, faClover, faHeart, faShoppingBag, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let wishlistQuantity = 1;
    let itemsQuantity = 1;
    return (
        <div>
            <nav className='flex justify-between sm:px-20 px-6 py-6 items-center'>

                <div className="logo text-4xl text-gray-600 font-bold">

                    <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faShoppingBag}></FontAwesomeIcon>FASHion</div>
                <div className="links flex gap-6 text-4xl">
                    <Link to='/cart' className='relative text-gray-500'>
                        <span className='absolute h-[18px] w-[18px] rounded-[50%] text-white text-sm text-center right-[-5px] font-bold bg-red-500 top-[-5px] '>{itemsQuantity}</span>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </Link>
                    <Link to='/cart' className='relative'>
                        <span className='absolute h-[18px] w-[18px] rounded-[50%] text-white text-sm text-center right-[-5px] font-bold bg-red-500 top-[-5px] '>{wishlistQuantity}</span>
                        <FontAwesomeIcon className='text-gray-500' icon={faHeart}></FontAwesomeIcon>
                    </Link>
                    <Link to='/cart'>
                        <FontAwesomeIcon className='text-gray-500' icon={faSignIn}></FontAwesomeIcon>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;