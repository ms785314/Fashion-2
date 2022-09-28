import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import bannerImg from '../../images/1.webp'
import Brands from '../Brands/Brands';
import FlickingComp from '../Flicking/FlickingComp';

const colorMain = '#f34a4a';
// const colorMain = '#B01B17';
const Banner = () => {
    const [position, setPosion] = useState(0);


    // const handlePositionRight = () => {
    //     if (position < 4) {
    //         setPosion(position + 1);
    //     }
    // }

    // const handlePositionLeft =() =>{
    //     console.log('clicked', position);
    //     if(position > 0){
    //         setPosion(position - 1);
    //         // setInterval(settTime,4000)
    //     }
    // }


    setTimeout(() => {
        if (position < 3) {
            setPosion(position + 1)
        } else {
            setPosion(0)
        }
    }, 3000)


    const [products, setProducts] = useProducts();

    return (
        <div>
            <div className='sm:h-[80vh] h-[100vh]  '>
                <div className='h-full   sm:mx-16 mx-6 rounded-[20px] shadow-lg mt-4 overflow-hidden relative flex flex-col-reverse'>
                    <div>
                        <div className=' absolute top-[20%] uppercase left-10 '>
                            <h1 className='sm:text-7xl xsm:text-5xl xxsm:text-3xl text-xl'>
                                <span className='bg-white  pr-16 md:pr-8'>let's</span> <br />
                                Explore <br />
                                <span className='text-white pr-14 py-2 inline-block rounded-[100% 0%]' style={{ backgroundColor: `${colorMain}` }}>unique</span> <br />
                                clothes
                            </h1>

                            <button className='p-4 rounded text-white text-xl hover:shadow-lg mt-6' style={{ backgroundColor: `${colorMain}` }}>Shop Now</button>
                        </div>
                    </div>
                    <img src={bannerImg} className='object-cover xxsm:object-top object-[-220px,0] h-full w-full' alt="" /></div>


            </div>
            <div className='my-14'>
                <Brands></Brands>
            </div>
            <div className='px-16 my-10 relative'>
                <h1 className='xxsm:text-4xl mb-4 uppercase font-bold relative inline-block'>Trendings <span className='h-[10px] absolute opacity-90 left-0 bottom-0 w-[100%] inline-block z-[-1]' style={{ backgroundColor: `${colorMain}`, borderRadius: '100% 0' }}></span></h1>
                <div className='relative w-full'>
                    <div className='wrappers overflow-hidden relative mx-auto'>
                        {/* <div className='wrapper1 h-[100%] w-[20%] bg-red-500 z-10 absolute'></div> */}
                        <FlickingComp array={products} position={position}></FlickingComp>
                        {/* <div className='wrapper2 h-[100%] w-[20%] right-0 bg-red-500 z-10 top-0 absolute'></div> */}
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Link to='/shop' className='p-1 xxsm:p-2 rounded text-white xxsm:text-xl hover:shadow-lg mt-6' style={{ backgroundColor: `${colorMain}` }}>Interested?</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;