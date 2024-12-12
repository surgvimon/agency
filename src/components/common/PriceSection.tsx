'use client'
import React from 'react'
import { PackageCard } from '@/components/cards';
import { useAnimation, useInView, motion } from "framer-motion";

const PriceSection = () => {
  // const { innerWidth: Width } = window;
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  React.useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <>
    <div className="max-w-screen overflow-x-hidden">
      <div className="w-full py-[10rem] px-4 bg-white -mt-28">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <PackageCard
              image={"/images/Price/1.png"}
              Package={"Growth Package"}
              Price={"$350"}
              Feature1={"Advanced Algorithmic Solutions"}
              Feature2={"Trained Personnel Support"}
              Feature3={"Innovative Technology Integration"}
              Feature4={"Powerful Analytics Capabilities"}
              Feature5={"Personalized Solutions"}
              Feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-500"}
              iconColor4={"text-green-300"}
              iconColor5={"text-green-300"}
              iconColor6={"text-green-300"}
              buttonBg={"bg-gray-300"}
              hoverBgButton={"hover:bg-gray-200"}
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <PackageCard
              image={"/images/Price/2.png"}
              Package={"Standard Package"}
              Price={"$1200"}
              Feature1={"Advanced Algorithmic Solutions"}
              Feature2={"Trained Personnel Support"}
              Feature3={"Innovative Technology Integration"}
              Feature4={"Powerful Analytics Capabilities"}
              Feature5={"Personalized Solutions"}
              Feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-500"}
              iconColor4={"text-green-500"}
              iconColor5={"text-green-300"}
              iconColor6={"text-green-300"}
              buttonBg={"bg-green-400"}
              hoverBgButton={"hover:bg-green-500"}
              buttonTextColor={"text-white"}
              standOutBg={"bg-blue-100/30"}
              marginMiddle={"md:my-6"}
            />
          </motion.div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <PackageCard
              image={"/images/Price/3.png"}
              Package={"Enterprise Package"}
              Price={"$7500"}
              Feature1={"Advanced Algorithmic Solutions"}
              Feature2={"Trained Personnel Support"}
              Feature3={"Innovative Technology Integration"}
              Feature4={"Powerful Analytics Capabilities"}
              Feature5={"Personalized Solutions"}
              Feature6={"Continuous Innovation"}
              iconColor1={"text-green-500"}
              iconColor2={"text-green-500"}
              iconColor3={"text-green-500"}
              iconColor4={"text-green-500"}
              iconColor5={"text-green-500"}
              iconColor6={"text-green-500"}
              buttonBg={"bg-gray-300"}
              hoverBgButton={"hover:bg-gray-200"}
            />
          </motion.div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default PriceSection;