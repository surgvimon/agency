import React from 'react';

export const useIsOnscreen =  ( elementRef:any )  => {
    const [isOnscreen, setIsOnscreen] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries:any) => {
            const [entry] = entries;
            setIsOnscreen(entry.isIntersecting)
        });
        observer.observe(elementRef.current);
        return () => {
            observer.disconnect();
        };

    }, [elementRef])

    return isOnscreen;
}