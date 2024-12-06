import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MiddleItems from './MiddleItems';

const AnimatedScrollComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    });

    return (
        <animated.div ref={ref} style={props} className="">
          <MiddleItems/>
        </animated.div>
    );
};

export default AnimatedScrollComponent;
