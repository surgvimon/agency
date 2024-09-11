'use client'
import React from 'react'
import { 
    // AnimateChangeInHeight, 
    AnimateChangeInHeightOld, 
    Button 

} from '@/components/ui';
import { data_package } from '@/utils/simple-data';

const ContentChangHeight = () => {
    const data  = data_package;
    const logRef = React.useRef<any>(null);
    const elementRef = React.useRef<any>(null);

    const simple_description = "A delicious example of the  API. As of Feb 12th, 2020 this requires a Chrome or Firefox browser.";
    const [description, setDescription] = React.useState<string>(simple_description)

    const handleClick = (content: string) => {
        setDescription(content);
    };
    return (
        <div className={`w-full max-w-[580px] mx-auto`}>
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
                <div ref={elementRef} className="w-full overflow-hidden">
                    <AnimateChangeInHeightOld>
                        <p  className="intro bg-red-100 p-8 border-dashed rounded-md">{description}</p>
                    </AnimateChangeInHeightOld>
                </div>
            </div>
        </div>
    )
}

export default ContentChangHeight;
