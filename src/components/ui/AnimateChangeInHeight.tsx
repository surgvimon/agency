import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/helpers/clsx';

interface AnimateChangeInHeightProps {
    expanded?: boolean;
    children: React.ReactNode;
    className?: string;
}
const AnimateChangeInHeight:React.FC<AnimateChangeInHeightProps> = ({ children, className }) => {
  return (
    <div className={cn(`w-full `, className)}>
        <AnimatePresence mode="wait">
            {/* {expanded && ( */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    {children}
                </motion.div>
            {/* )} */}
        </AnimatePresence>
    </div>
  )
}

export default AnimateChangeInHeight;