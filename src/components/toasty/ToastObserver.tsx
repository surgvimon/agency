'use client'
import React from 'react';
// import { motion } from 'framer-motion';

// import styles from './Toasty.module.css';

function Toasty() {
    const [isShown, setIsShown] = React.useState(false);

    const wrapperRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if(wrapperRef.current){
            const observer = new IntersectionObserver((entries) => {
                const [entry] = entries;
                setIsShown(entry.isIntersecting)
            });
            observer.observe(wrapperRef.current);
        }
    }, []);

    const translateX = isShown ? '45%' : '100%';

    return (
        <div ref={wrapperRef} className={`inline-block bg-green-200`}>
            <div
            className={`styles.character text-[128px]`}
            style={{
                transition: 'transform 200ms',
                transform: `translateX(${translateX})`,
            }}
            >
                👻
            </div>
        </div>
    );
}

export default Toasty;