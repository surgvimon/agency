'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IcnCircle, IcnDownloadApp } from '@/components/icons';
import { Button } from '@/components/ui';

const HeroSection = () => {
  return (
    <div className='overflow-x-hidden bg-[#e0e0e0e0] '>
        <div className="lg:max-w-7xl dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px] max-w-xl mx-auto">
          <div className="container mx-auto px-10">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                      <motion.div
                       variants={{
                        visible: { opacity: 1, y: 0},
                        hidden: {opacity: 0, y: 75}
                       }}
                       initial= "hidden"
                       animate="visible"
                       transition={{ duration: 0.5, delay: 0.25}}
                      >
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600  mb-5  font-bold !leading-[1.208] text-dark dark:text-white "
                            >
                            Here you can <br />
                            <span className='text-4xl sm:text-7xl'>Level Up Your Business</span>
                        </h1>
                        <p
                            className="mb-8 max-w-[480px] text-sm sm:text-base text-body-color dark:text-dark-6"
                            >
                            With TailGrids, business and students thrive together. Business
                            can perfectly match their staffing to changing demand throughout
                            the dayed.
                        </p>
                      </motion.div>
                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0},
                          hidden: {opacity: 0, x: -75}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25}}
                      >
                        <ul className="flex flex-wrap items-center">
                            <li>
                              <Button 
                                  variant='primary' 
                                  className='py-5 bg-[#3758F9]'
                                  onClick={() => ""}
                              >
                                  Get Started
                              </Button>
                            </li>
                            <li>
                              <Button 
                                  variant='link' 
                                  className='py-5 px-6 ml-4 bg-slate-100 hover:bg-slate-200 hover:no-underline'
                                  onClick={() => ""}
                              >
                                  <IcnDownloadApp className='text-[#3056D3] mr-3'/>Get Started
                              </Button>
                            </li>
                        </ul>
                      </motion.div>
                      <motion.div 
                        variants={{
                          visible: { opacity: 1},
                          hidden: {opacity: 0}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.25}}
                        className="clients pt-16"
                      >
                          <h6
                            className="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6"
                            >
                            Some Of Our Clients
                            <span className="inline-block w-8 h-px ml-3 bg-black"></span>
                          </h6>
                          <div className="flex items-center gap-4 xl:gap-[50px]">
                            <Link href="#" className="block py-3">
                              <Image
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                width={200}
                                height={52}
                                alt="oracle"
                              />
                            </Link>
                            <Link href="#" className="block py-3">
                              <Image
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                width={200}
                                height={47}
                                alt="intel"
                              />
                            </Link>
                            <Link href="#" className="block py-3">
                              <Image
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                width={200}
                                height={52}
                                alt="logitech"
                              />
                            </Link>
                          </div>
                      </motion.div>
                    </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/12"></div>
                <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                      <motion.div 
                        variants={{
                          visible: { opacity: 1, x: 0, filter: "blur(0px)"},
                          hidden: {opacity: 0, x: 75, filter: "blur(5px)"}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.25}}
                        className="relative z-10 inline-block pt-11 lg:pt-0"
                      >
                          <Image
                            src={"/images/heroImage.jpg"}
                            alt="hero"
                            width={491}
                            height={515}
                            className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                          />
                          <Image
                            src={"/images/stars.png"}
                            alt="hero"
                            width={512}
                            height={512}
                            className="z-20 w-28 absolute mt-[-105%] right-[-10%] opacity-70 hover:opacity-100"
                          />
                          <span className="absolute -left-8 -bottom-8 z-[-1]">
                            <IcnCircle className='text-[#3056D3]'/>
                          </span>
                      </motion.div>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection;