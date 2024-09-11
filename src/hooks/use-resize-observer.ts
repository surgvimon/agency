import React from 'react';

export const useResizeObserver =  ( elementRef:any )  => {
    const [height, setHeight] = React.useState<any>(null);
    React.useEffect(() => {
        let resizeObserver:any;
        const contentElement = elementRef.current;

        // Function to check for overflow
        const checkOverflow = (observerElement:any) => {
            resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setHeight(entry.contentRect.height);
                }
            });

            // Observing the content element for resizing
            if (observerElement) {
                resizeObserver.observe(observerElement);
            }
        };

        if (contentElement) {
            checkOverflow(contentElement);
        }

        // Cleanup function to disconnect observer
        return () => {
            if (resizeObserver && contentElement) {
                resizeObserver.unobserve(contentElement);
            }
        };

    }, [elementRef])

    return height;
}