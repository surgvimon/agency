'use client'
import React from 'react';
import Image from "next/image";
import { useAnimation, useInView, motion } from 'framer-motion';

const FeaturesSection = () => {
  // const { innerWidth: width, innerHeight: height} = window;
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  React.useEffect(()=>{
    if(isInView) {
      mainControlls.start("visible");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])
  return (
    <>
      <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-400'/>
      <div className='max-w-screen overflow-x-hidden bg-white'>
        {/* {width < 631 ? (<></>): (<></>)} */}
        <section className="">
          <div className="max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Aliquip definiebas ad est</h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">Quando cetero his ne, eum admodum sapientem ut.</p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Ad vix debet docendi</h3>
                <p className="mt-3 text-lg dark:text-gray-600">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
                <div className="mt-12 space-y-12">
                  <motion.div 
                    ref={ref}
                    variants={{
                      hidden:{ opacity: 0 , y: 75},
                      visible: {opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration: 0.5, delay: 0.15}}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <Image
                            src={"/images/Features/f1.png"}
                            alt="hero"
                            width={512}
                            height={512}
                            className="max-w-full"
                          />
                      </div>
                    </div>
                    <div  className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Per ei quaeque sensibus</h4>
                      <p className="mt-2 dark:text-gray-600">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    ref={ref}
                    variants={{
                      hidden:{ opacity: 0 , y: 75},
                      visible: {opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration: 0.5, delay: 0.35}}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <Image
                          src={"/images/Features/f2.png"}
                          alt="hero"
                          width={512}
                          height={512}
                          className="max-w-full"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cu imperdiet posidonium sed</h4>
                      <p className="mt-2 dark:text-gray-600">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    ref={ref}
                    variants={{
                      hidden:{ opacity: 0 , y: 75},
                      visible: {opacity: 1, y: 0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration: 0.5, delay: 0.55}}
                    className="flex"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <Image
                          src={"/images/Features/f3.png"}
                          alt="hero"
                          width={512}
                          height={512}
                          className="max-w-full"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Nulla omittam sadipscing mel ne</h4>
                      <p className="mt-2 dark:text-gray-600">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div 
                ref={ref}
                variants={{
                  hidden:{ opacity: 0 , y: -75},
                  visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{duration: 0.5, delay: 0.25}}
                aria-hidden="true" 
                className="mt-10 lg:mt-0"
              >
                <Image
                  src={"/images/Features/fb11.png"}
                  alt="hero"
                  width={480}
                  height={360}
                  className="taos:translate-x-[200px] taos:opacity-0 hover:translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </motion.div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Eam nibh gloriatur ex</h3>
                  <p className="mt-3 text-lg dark:text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
                  <div className="mt-12 space-y-12">
                    <motion.div 
                      ref={ref}
                      variants={{
                        hidden:{ opacity: 0 , y: -75},
                        visible: {opacity: 1, y: 0}
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{duration: 0.5, delay: 0.15}}
                      className="flex"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <Image
                            src={"/images/Features/f4.png"}
                            alt="hero"
                            width={512}
                            height={512}
                            className="max-w-full"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cibo augue offendit has ad</h4>
                        <p className="mt-2 dark:text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      ref={ref}
                      variants={{
                        hidden:{ opacity: 0 , y: -75},
                        visible: {opacity: 1, y: 0}
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{duration: 0.5, delay: 0.35}}
                      className="flex"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <Image
                            src={"/images/Features/f5.png"}
                            alt="hero"
                            width={512}
                            height={512}
                            className="max-w-full"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">At eum ferri luptatum lobortis</h4>
                        <p className="mt-2 dark:text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      ref={ref}
                      variants={{
                        hidden:{ opacity: 0 , y: -75},
                        visible: {opacity: 1, y: 0}
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{duration: 0.5, delay: 0.55}}
                      className="flex"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <Image
                            src={"/images/Features/f6.png"}
                            alt="hero"
                            width={512}
                            height={512}
                            className="max-w-full"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Dicunt verterem evertitur eu sea</h4>
                        <p className="mt-2 dark:text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  ref={ref}
                  variants={{
                    hidden:{ opacity: 0 , x: 75},
                    visible: {opacity: 1, x: 0}
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{duration: 0.5, delay: 0.25}}
                  className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                >
                  <Image
                    src={"/images/Features/fb22.png"}
                    alt="hero"
                    width={480}
                    height={360}
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-400'/>
    </>
  )
}

export default FeaturesSection;
