import { faHeart, faHeartCircleBolt, faHeartCircleCheck, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const isWished = true;
    const isAdded = true;
    
    // console.log(props);
    const {addToCart,product} = props;
    // console.log(addToCart);
    const { name, price, picture } = product;
    
    return (
        <div className='border rounded-lg  grid grid-rows-[320px,100px] shadow-lg'>
            <div className='h-full border'>
                <img src={picture} alt="" className='h-full w-full object-cover object-top' />
            </div>
            <div>
                <h1 className='p-2 text-xl font-bold'>{name}</h1>
                <h1 className='text-2xl font-bold px-2'>Price:${price * 10}</h1>

                <div  className='py-2 flex justify-between px-6 text-4xl'>
                    
                        <span onClick={()=>addToCart(product)}>
                        {
                            isAdded?<FontAwesomeIcon className='cursor-pointer text-red-500' icon={faShoppingCart}></FontAwesomeIcon> :<FontAwesomeIcon className='cursor-pointer' icon={faShoppingCart}></FontAwesomeIcon>
                        }
                        </span>
                    
                    {
                        isWished ? <FontAwesomeIcon icon={faHeart} className='text-red-500 cursor-pointer'></FontAwesomeIcon> : <FontAwesomeIcon className='cursor-pointer' icon={faHeart}></FontAwesomeIcon>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;