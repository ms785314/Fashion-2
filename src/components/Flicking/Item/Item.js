import React from 'react';

const Item = (props) => {
    const { picture } = props.item;

    return (
        <div className='xxsm:w-[calc(100%/2)] xsm:w-[calc(100%/3)] w-full text-center  h-[360px] borderborder-black'>
            {/* value:{name} */}
            <img className='w-full h-full object-cover object-top' src={picture} alt="" />
        </div>
    );
};

export default Item;