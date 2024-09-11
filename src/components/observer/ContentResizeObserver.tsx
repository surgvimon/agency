'use client'
import { cn } from '@/helpers/clsx';
import { data_package } from '@/utils/simple-data';
import React from 'react'
import { Button } from '@/components/ui';
// import { useResizeObserver } from '@/hooks/use-resize-observer';

interface ContentResizeObserverProps {
    className?: string;
}
const ContentResizeObserver:React.FC<ContentResizeObserverProps> = ({ className }) => {
    const data  = data_package;
    const logRef = React.useRef<any>(null);
    const elementRef = React.useRef<any>(null);
    const simple_description = "A delicious example of the  API. As of Feb 12th, 2020 this requires a Chrome or Firefox browser.";
    const [description, setDescription] = React.useState<string>(simple_description)
    // const elementHeight = useResizeObserver(elementRef);

    const handleClick = (content: string) => {
        setDescription(content);
        // elementRef.current.classList.toggle("h-[450px]")
    };
    
    React.useEffect(() => {
        let resizeObserver:any;
        const contentElement = elementRef.current;

        // Function to check for overflow
        const checkOverflow = (observerElement:any) => {
            resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    // const strHeight = `${entry.contentRect.height}px`;
                    logRef.current.innerHTML = entry.contentRect.height + 'px';
                    // entry.target.classList.add(`h-[${String(entry.contentRect.height)}px]`)
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
    
    return (
        <div className={cn(`w-full max-w-[580px] mx-auto mb-12`, className)}>
            <div id="primary-content">
                <div className="flex flex-row items-center gap-3 my-8">
                    <Button 
                        id="add"
                        variant='primary' 
                        className=''
                        onClick={() => handleClick(data[0].description)}
                    >
                      Click me to add some bacon!
                    </Button>
                    <Button 
                        id="reset"
                        variant='primary' 
                        className=''
                        onClick={() => handleClick(data[2].description)}
                    >
                      Reset
                    </Button>
                    <span className="info">Current Hight: <span id="size" ref={logRef}></span></span>
                </div>
                <div ref={elementRef} className="relative w-full overflow-hidden bg-gray-100">
                    <p  className="intro bg-red-100 p-8 border-dashed rounded-md">{description}</p>
                    <div 
                        className="mx-auto my-8 w-20 p-5 bg-orange-200 cursor-pointer transition-height duration-500 ease-in-out h-8" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            e.currentTarget.classList.toggle("h-20");
                            // console.log(e.currentTarget.classList)
                            // e.currentTarget.classList.toggle("h-20");
                            // elementRef.current.classList.toggle("h-[450px]")
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentResizeObserver;