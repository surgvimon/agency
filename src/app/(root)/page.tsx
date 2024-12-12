import { 
  FeaturesSection,
  HeroSection, 
  PriceSection,
  ReviewSection
} from '@/components/common';
import React from 'react'
// import Image from "next/image";

export default function Home() {
  return (
    <div className='my-0 '>
      <HeroSection />
      <FeaturesSection />
      <PriceSection/>
      <ReviewSection/>
    </div>
  );
}
