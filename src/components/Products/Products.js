import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = (props) => {

    const [products, setProducts] = useProducts();
    console.log(products);
    return (
        <div className='px-14 grid gap-5 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10'>
            {
                products.map(product =><Product addToCart={props.addToCart} product={product}></Product>)
            }
        </div>
    );
};

export default Products;