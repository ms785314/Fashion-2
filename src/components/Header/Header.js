import { faBars, faCartShopping, faHeart, faShoppingBag, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const colorMain = '#f34a4a';
const Header = () => {
    let wishlistQuantity = 1;
    let itemsQuantity = 1;
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='flex justify-between sm:px-20 px-6 py-6 items-center'>

                <div className="logo xxsm:text-4xl xxxsm:text-3xl text-xl font-bold relative">
                    <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faShoppingBag}></FontAwesomeIcon>FASHion <span className='h-[10px] absolute opacity-90 right-0 bottom-0 w-[80%] inline-block z-[-1]' style={{ backgroundColor: `${colorMain}`, borderRadius: '100% 0' }}></span></div>
                <div className="links flex gap-6 xxsm:text-4xl xxxsm:text-3xl text-xl">
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

                    {/* toggle button */}
                    <FontAwesomeIcon onClick={()=> setOpen(!open)} className='cursor-pointer border border-black p-1 mt-[-4px] rounded bg-black text-white' icon={faBars}></FontAwesomeIcon>
                </div>


            </nav>
            <div  className='toggle-links h-[100px] justify-center items-center gap-7 flex transition z-10 absolute w-full bg-gray-300 origin-top scale-y-0' style={open ? {transform:'scaleY(1)'} :{transform:'scaleY(0)'}}>
                <Link to='/home'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/reviews'>Customer Reviews</Link>
            </div>
        </div>
    );
};

export default Header;