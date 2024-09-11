import {
  // ContentChangHeight, 
  ContentResizeObserver, 
  // ContentOnscreen
} from '@/components/observer'
import React from 'react'

const Page = () => {
  
  return (
    <div className='relative !overflow-x-hidden w-full'>
      <ContentResizeObserver/>
    </div>
  )
}

export default Page
