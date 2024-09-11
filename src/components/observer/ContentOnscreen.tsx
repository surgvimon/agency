'use client'
import { useIsOnscreen } from '@/hooks/use-is-onscreen';
import React from 'react'

const ContentOnscreen:React.FC = () => {
    const elementRef = React.useRef(null);
    const isOnscreen = useIsOnscreen(elementRef);
  return (
    <>
    <div className='w-full bg-gray-200 p-8 text-center fixed top-20'>
        Red box visible : { isOnscreen ? 'YES' : 'NO'}
    </div>
    <div className="w-full [&_*]:mx-auto">
        <div className="w-[300px] h-[300px]"></div>
        <div className="w-[300px] h-[300px]"></div>
        <div className="w-[300px] h-[300px]"></div>
        <div ref={elementRef} className="bg-green-500 w-[300px] h-[300px]">aaaa</div>
        <div className="w-[300px] h-[300px]"></div>
        <div className="w-[300px] h-[300px]"></div>
    </div>
    </>
  )
}

export default ContentOnscreen;