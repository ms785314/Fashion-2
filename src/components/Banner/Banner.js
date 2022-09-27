import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/1.webp'

const colorMain = '#f34a4a';
// const colorMain = '#B01B17';
const Banner = () => {
    return (
        <div className='h-[80vh] px-18 '>

            <div className=' h-full   sm:mx-16 mx-6 rounded-[20px] shadow-lg mt-4 overflow-hidden relative'>
                <div>
                    <div className='absolute top-[20%] uppercase left-10'>
                        <h1 className=' text-7xl '>
                            <span className='bg-white  pr-16 md:pr-8'>let's</span> <br />
                            Explore <br />
                            <span className='text-white pr-14 py-2 inline-block rounded-[100% 0%]' style={{backgroundColor:`${colorMain}`}}>unique</span> <br />
                            clothes
                        </h1>

                        <button className='p-4 rounded text-white text-xl hover:shadow-lg mt-6' style={{backgroundColor:`${colorMain}`}}>Shop Now</button>
                    </div>
                </div>
                <img src={bannerImg} className='object-cover object-top h-full w-full' alt="" /></div>
        </div>
    );
};

export default Banner;