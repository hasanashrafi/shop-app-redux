import React from 'react';
import { useProducts } from '../context/ProductContext';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
    const products = useProducts()

    return (
        <div className="slide-container   p-2">
            <Slide
                indicators={true}
                arrows={true}
                duration={3000}
                transitionDuration={500}
            >
                {products.map((product) => (
                    <div key={product.id}>
                        <div
                            className="rounded-lg   h-96 md:h-[500px] w-full  ">
                            <Link to={`/products/${product.id}`}>
                                <img loading='lazy' src={product.image} className='w-fit h-full mx-auto ' />
                            </Link>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;