import React from 'react';
import Item from './Item/Item';

const FlickingComp = (props) => {
  // const arr = [
  //   {item:1},
  //   {item:2},
  //   {item:3},
  //   {item:4},
  //   {item:5},
  //   {item:6}
  // ]
  // console.log(props.position);
  const array = props.array;
  let slicedArray;
  if (array.length > 6) {
     slicedArray = array.slice(0,6);
  }
  let changePosition = props.position;
  return (
    <div>
      <div className='gap-5  xsm:w-[200%]  xxsm:w-[300%] w-[600%] flex' style={{transform:`translateX(calc((-50% / 3 )*${changePosition}))`,transition:'2s'}}>
          {
            slicedArray?.map(element => {
              return <Item key={element.id} item={element}></Item>
            })
          }
      </div>
    </div>
  );
};

export default FlickingComp;