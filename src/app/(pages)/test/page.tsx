import {
  ContentResizeObserver, 
  // ContentOnscreen
} from '@/components/observer'
import React from 'react'

const Page = () => {
  
  return (
    <div className='relative !overflow-x-hidden w-full'>
      <ContentResizeObserver/>
      <h3 className="transition-all ease-in delay-10 duration-300 bg-blue-300 w-[300px] hover:bg-green-300 hover:text-white hover:w-[500px] mx-auto text-center p-3">
        Hover on me!
      </h3>
    </div>
  )
}

export default Page
